import React, { useState, useEffect } from 'react';


const getAppIDFromURL = (url) => {
  const match = url.match(/\/app\/(\d+)/);
  return match ? match[1] : null;
};

const SteamGameInfo = ({ appUrl }) => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const appID = getAppIDFromURL(appUrl);
    if (!appID) {
      setError('Invalid Steam URL');
      setLoading(false);
      return;
    }
  
    
    /*fetch(`https://store.steampowered.com/api/appdetails?appids=${appID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[appID].success) {
          setGameData(data[appID].data);
        } else {
          setError('Game data not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch data'+err.message);
        setLoading(false);
      })*/;
  }, [appUrl]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{
      background: '#23272A',
      border: '1px solid #7289DA',
      borderRadius: '15px',
      padding: '20px',
      maxWidth: '600px',
      color: '#FFFFFF',
      textAlign: 'center',
      boxShadow: '0 8px 20px rgba(114,137,218,0.6)',
      margin: '20px auto'
    }}>
      <h2 style={{ color: '#7289DA' }}>{gameData.name}</h2>
      <img 
        src={gameData.header_image} 
        alt={gameData.name} 
        style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }}
      />
      <p style={{ color: '#FFFFFFAA' }}>{gameData.short_description}</p>
      {gameData.is_free ? (
        <span style={{ color: '#1ABC9C', fontWeight: 'bold' }}>Free to Play</span>
      ) : (
        <span style={{ color: '#FF5555', fontWeight: 'bold' }}>
          {gameData.price_overview ? gameData.price_overview.final_formatted : 'Price not available'}
        </span>
      )}
      <br />
      <a 
        href={`https://store.steampowered.com/app/${gameData.steam_appid}`} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '15px',
          padding: '10px 20px',
          background: '#7289DA',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        View on Steam
      </a>
    </div>
  );
};

export default SteamGameInfo;
