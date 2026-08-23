require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const buildPath = path.join(__dirname, 'build');
console.log(buildPath);
// Matches "homepage": "/build" in the client package.json —
// index.html references /build/static/js/*.js and /build/static/css/*.css
app.use('/build', express.static(buildPath));

// Keeps root-level files reachable too (favicon.ico, robots.txt, manifest.json)
app.use(express.static(buildPath));

app.get('/api/patchnotes', async (req, res) => {
  try {
    const appId = process.env.STEAM_APP_ID;

    if (!appId) {
      return res.status(500).json({
        error: 'STEAM_APP_ID is not configured'
      });
    }

    const url = new URL(
      'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/'
    );

    url.searchParams.set('appid', appId);
    url.searchParams.set('count', '100');
    url.searchParams.set('maxlength', '0');

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Steam API returned ${response.status}: ${await response.text()}`
      );
    }

    const data = await response.json();

    res.json(data.appnews?.newsitems ?? []);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message
    });
  }
});

// Unknown API routes should 404 as JSON, not fall through to the SPA
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Asset requests that missed express.static are genuinely missing files —
// returning index.html here would produce confusing MIME-type errors
app.use('/build/static', (req, res) => {
  res.status(404).end();
});

// React SPA fallback — Express 5 syntax
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Steam App ID: ${process.env.STEAM_APP_ID}`);
});