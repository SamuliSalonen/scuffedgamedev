import React from 'react';
import GameGrid from './GameGrid';
import RoadmapPanel from './RoadmapPanel';
import { Support, TwitchPanel } from './CalloutPanel';
import PlaytestRoster from './Plytestroster';
import DevelopersSection from './developers';
import GameplayPanel from './GameplayPanel';
import gameplayVideo from "../Assets/ehgvids/combat1.mp4";
import gameplayVideo2 from "../Assets/ehgvids/combat2.mp4";
import gameplayVideo3 from "../Assets/ehgvids/combat3.mp4";
import progression from "../Assets/ehggallery/progression.png";

import planetimg from "../Assets/ehggallery/planet.png";
import News from './News';
//import gameplayVideo2 from "../Assets/ehgvids/anothercombat.mp4";
//import gameplayVideo3 from "../Assets/ehgvids/bossfight.mp4";

/*  description={"Epic Hero game is a physics-based roguelite Game. Build your own superhero and fight off against an alien invasion on the world. Defend the fully destructible map using a variety of skills, moves and abilities."}
-              link={steam}
-              video={"https://www.youtube.com/embed/ias3KT3sFRE"}
-              title={"Epic Hero Game"}
-              tags={["Early Access", "Roguelite", "Physics-Based", "Superhero", "Action"]}*/
const news = [
  {
    id: "1",
    title: "Planet level design change",
    description:
      "Levels are now planets, making the gameplay experience more immersive. It gets rid of ugly terrain corners, and it happens to fit the superhero theme very well.",
    image: planetimg,
    category: "Update",
    date: "Aug 8, 2026",
    featured: false,
  },

  {
    id: "2",
    title: "Playtest",
    description:
      "Playtest is generally available to anyone who wants to be part of building the game.",
    category: "Update",
    date: "Aug 8, 2026",
    featured: false,
  },

  {
    id: "3",
    title: "Progression update",
    description: `
Introducing new item tiers:

- **Common**  basic equipment, like a sword.

- **Rare**  powerful items, like TNT.
- **Ultimate** devastating items, like a nuke.
- **Mega** items capable of planetary destruction.
`,
    image: progression,
    category: "Update",
    date: "Aug 8, 2026",
    featured: true,
  },
];
const games = [
  {
    id: 'main',
    title: "Epic Hero Game",
    description: "Epic Hero game is a physics-based roguelite Game. Build your own superhero and fight off against an alien invasion on the world. Defend the fully destructible map using a variety of skills, moves and abilities."
    ,
    video: "https://www.youtube.com/embed/ias3KT3sFRE",
    image: '',
    link: 'https://store.steampowered.com/app/2081720/Epic_Hero_Game/',
    tags: ['Early Access', 'Roguelite', 'Physics-Based', 'Superhero', 'Action'],
    featured: true,
  },
];

const games2 = [
  {
    id: 'main',
    title: "Epic Hero Game",
    description: "Epic Hero game is a physics-based roguelite Game. Build your own superhero and fight off against an alien invasion on the world. Defend the fully destructible map using a variety of skills, moves and abilities."
    ,
    video: [
      gameplayVideo,
      gameplayVideo2,
      gameplayVideo3
    ],
    image: '',
    link: 'https://store.steampowered.com/app/2081720/Epic_Hero_Game/',
    tags: ['Early Access', 'Roguelite', 'Physics-Based', 'Superhero', 'Action'],
    featured: true,
  },
];

/* Oldest first. The rail fills top-down, so chronological order
   is what makes the progress read correctly. */
const milestones = [
  { status: 'Pending', text: 'Early access on Steam' },
  { status: 'Pending', text: 'Add more builds' },

  { status: 'Completed', text: 'Upgrade system design' },

  { status: 'Completed', text: 'Planet game design' },

  { status: 'Completed', text: 'Physics engine upgrade' },
  { status: 'Completed', text: 'Initial prototype finished' },




];

const Home = ({ kofi, twitchChannel }) => (
  <>
    {
      /*<GameGrid title="Our games" games={games} meta="1 in early access" />
*/}
    <GameplayPanel game={games2[0]}></GameplayPanel>
    <section className="section section--raised">
      <div className="container">
        <News news={news}></News>
      </div>
    </section>
    <section className="section section--raised">
      <div className="container">

        <div className="home-aside">
          <RoadmapPanel milestones={milestones} title="Roadmap" />

          <div className="callout-row">
            <PlaytestRoster taken={133}></PlaytestRoster>
            <Support link={kofi} />
            <TwitchPanel channelName={twitchChannel} />
          </div>

        </div>
        <DevelopersSection></DevelopersSection>

      </div>
    </section>
  </>
);

export default Home;