
//require('fs');
import React, { useEffect, useState, useRef } from 'react';
import './styles/index.scss';
import Header from './components/Header';

// ── Assets ────────────────────────────────────────────────
import ehgFace from './Assets/emoji.png';
import ehgLogo from './Assets/ehglogo.png';
import mainCapsule from './Assets/main-capsule.jpg';
import youtubeLogo from './Assets/youtube.png';
import twitterLogo from './Assets/Twitter_Logo_Blue.png';
import discordLogo from './Assets/Discord-Logo-Color.png';
import twitchLogo from './Assets/Glitch_Purple_RGB.png';
import tiktokLogo from './Assets/tiktokicon.png';
import steamLogo from './Assets/Steam_icon_logo.svg.png';

// ── Components ────────────────────────────────────────────
//import Social        from './components/social/Social';
import Home from './components/Home';
//import Gallery from './components/Gallery';
import PatchNotes from './components/PatchNotes';
//import SteamGameInfo from './components/SteamGameInfo';
//import Pitchdeck     from './components/Pitchdeck';

// Only if App renders these directly — Home already does.
import Game from './components/Game';
import Panel from './components/Panel';
import RoadmapPanel from './components/RoadmapPanel';
import { Support, TwitchPanel } from './components/CalloutPanel';

// ── Utils ─────────────────────────────────────────────────
import {
  contentChunk,
  contentChunkWithVideo,
  contentChunkWithImages,
  fetchMonsterImage,
  renderArray,
  simpleListItemP,
  simpleListItem,
} from './util';
const navbar = (discordLink, kofi, steam) => (
  <>
    <li><a href="#patchnotes">Patch Notes</a></li>
    <li><a href={steam} target="_blank" rel="noopener noreferrer">Steam</a></li>
    <li><a href="#games">Games</a></li>
    <li><a href={kofi} target="_blank" rel="noopener noreferrer">Support</a></li>
    <li><a href={discordLink} target="_blank" rel="noopener noreferrer">Contact</a></li>
  </>
);
function App() {
  const steam = "https://store.steampowered.com/app/2081720/Epic_Hero_Game/";
  const kofi = "https://ko-fi.com/scuffedgamedev"
  const discordLink = "https://discord.gg/YBESVNMwku";
  const [bgName, setBgName] = useState("background");
  const twitchChannelName = "clayman_dev";
  const twitch = "https://www.twitch.tv/clayman_dev";
  //artStyleExpanded
  //const [monsterNum, setMonsterNum] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      let backgroundClassName = "background no-blur";
      if (window.scrollY > 100) {
        backgroundClassName = "background blur";
      }
      if (window.scrollY > 200) {
        backgroundClassName = "background blur-hard";
      }


      setBgName(backgroundClassName);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navRef = useRef(null);
  const [isNavPinned, setIsNavPinned] = useState(false);
const [navOpen, setNavOpen] = useState(false);
 
// Close the panel if the viewport grows past the breakpoint while it
// is open — otherwise rotating to landscape strands it over the row.
useEffect(() => {
  const mq = window.matchMedia('(min-width: 769px)');
  const onChange = (e) => e.matches && setNavOpen(false);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}, []);
  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const initialTop = nav.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      setIsNavPinned(window.scrollY > initialTop);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setNavOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (

    <div className="App">
      {
        //     <img src={ehgBackground}></img>
      }
      <header className="">
        <div class={bgName}></div>
        <div className={`site-nav-wrapper ${isNavPinned ? 'site-nav-wrapper--pinned' : ''
          }`}>


          <nav
            ref={navRef}
            className={isNavPinned ? 'site-nav site-nav--pinned' : 'site-nav'}
          >
            <a className="logo-link" href="#top">
              <img className="logo" src={ehgFace} alt="" />
              <span className="site-title">Scuffed Gamedev</span>
            </a>

            <button
              type="button"
              className="nav-toggle"
              aria-expanded={navOpen}
              aria-controls="nav-links"
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
            </button>

            <ul
              id="nav-links"
              className={`nav-links${navOpen ? ' is-open' : ''}`}
              onClick={() => setNavOpen(false)}
            >
              {navbar(discordLink, kofi, steam)}
            </ul>
          </nav>
          {
          }
        </div>

        <div class="landing flexbox-root">
          <img class="game-logo" src={ehgLogo}></img>
          <div class="center-all">

            <a href={discordLink} target="_blank"><button class="join-btn">Join Playtest</button></a>

          </div>
        </div>


      </header>
      <div className='primary-content'>
        <div className='content-block'>


          <Home kofi={kofi} twitchChannel={twitchChannelName}></Home>
          <div>
            {
              <PatchNotes appId={24640663} feeds="steam_community_announcements" />
            }
          </div>

        </div>

      </div >

      <footer>
        <div class="footer-container">
          <div class="footer-logo">Scuffed Gamedev</div>
          <ul class="footer-links">
            {
              navbar(discordLink, kofi, steam)
            }
          </ul>
        </div>
        <div class="footer-bottom">
          &copy; {new Date().getFullYear()} Scuffed Gamedev. All rights reserved.
        </div>
      </footer>

    </div >
  );
}

export default App;
