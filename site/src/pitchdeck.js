import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import me from './Assets/me.png';
import ehgFace from './Assets/emoji.png';
import youtubeLogo from './Assets/youtube.png';
import ehgBackground from './Assets/scr2_upscaled.png';
import twitterLogo from './Assets/Twitter_Logo_Blue.png';
import discordLogo from './Assets/Discord-Logo-Color.png';
import twitchLogo from './Assets/Glitch_Purple_RGB.png';
import tiktokLogo from './Assets/tiktokicon.png';
import ehgLogo from './Assets/ehglogo.png';
import maincapsule from './Assets/maincapsule (1).jpg';

import steamLogo from './Assets/Steam_icon_logo.svg.png';

import Social from './components/social/Social.js';
import Game from './components/game/game.js';
import images from "./components/images.js";
import { contentChunk, contentChunkWithVideo, contentChunkWithImages, fetchMonsterImage, renderArray, simpleListItemP, simpleListItem } from './util.js';


const Pitchdeck = () => {
    const [artStyleExpanded, setArtStyleExpanded] = useState(false);
    const [technicalsExpanded, setTechnicalsExpanded] = useState(false);
    const [enemyDesignExpanded, setEnemyDesignExpanded] = useState(false);

    const [levelDesignExpanded, setLevelDesignExpanded] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    // <img class="game-logo" src={maincapsule}></img>
    return (
        <>
            {
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ias3KT3sFRE" frameborder="0" allowfullscreen="true" ></iframe>
              
            }

            {
                contentChunkWithVideo("Summary", <div>
                    <p>
                        <div className="list-paragraph2"><strong>Epic Hero Game</strong></div>

                        <p className='list-paragraph'>
                            Is a physics based roguelite / soulslike where you play as a superhero and its your job to save the world from an alien invasion where the world is getting totally destroyed!<br></br><br></br>
                            <p className='list-paragraph2'>
                                As you fight through enemies, player gets stronger during the fight (think of tournament of power in Dragon Ball Super)<br></br><br></br>
                                The game uses physics as a backbone for ridiculous anime powerscaling, where you can physically see a difference in the combat, the more stronger you get.
                            </p>
                            <p>(This page describes patch 0.3 since 29.12.2024)</p>
                            <a href="https://ko-fi.com/scuffedgamedev"><img style={{ "width": "64px" }} src={require("./Assets/ko-fi.png")}></img>Support development</a>
                        </p>
                    </p>

                </div>, require("./Assets/ehgvids/physicsbasedcombat.mp4"))

            }
            {
                //<p>insert some stuff about the demo here</p>,

                contentChunkWithImages("Demo",
                    <p class="list-paragraph">
                        <a href="https://www.dropbox.com/scl/fi/mpq9mcaykpt2xetg2ac2h/Epic-Hero-Game-0.2.zip?rlkey=gqnj155a6o6yf5cbt2dfrzcq1&raw=1" className="download-btn">Download patch 0.2</a>

                        <ul class="list-paragraph2">


                            <li>If you ever get stuck use the killall command from the debug menu</li>
                            <li>No full controller support at the moment</li>
                            <li>Some soundeffects are missing</li>

                            <li>Game has a lot of room for optimization, recommended to use powerful pc</li>
                            <li>Sometimes the transition between active ragdoll and optimized state can be snappy</li>
                            <li>You can enable more content in settings => toggle enableExperimentalContent
                                <p className='list-paragraph3'>this option adds more abilities and loot to the game, but this content can be very unbalanced or technically broken.</p></li>

                        </ul>

                        <a href="https://www.dropbox.com/scl/fi/l0znnau8wxvtpy63u3k0p/Epic-Hero-Game-0.21.zip?rlkey=mwvu5hmp6ivlxtzxjg8ru3bsb&raw=1" className="download-btn">Download patch 0.21</a>
                        <p className='list-paragraph3'>Patch notes</p>
                        <ul class="list-paragraph2">


                            <li>Significant physics smoothness improvements</li>
                            <li>Energy blast has juicier animations</li>

                        </ul>

                        <p className='list-paragraph3'>Patch notes</p>
                        <ul class="list-paragraph2">

                            0.3
                            <li>EHG engine rework</li>
                            <li>Fights are now encounter based, that are placed on islands around the map</li>
                            <li>Combat system is more robust</li>
                            <li>Aiming system improvements</li>
                            <li>Way less content, but more stable engine</li>
                            <li>Join discord to be notified when build is ready</li>

                        </ul>
                    </p>
                    , 3, 1)
            }
            {

                contentChunkWithVideo("Design corner stones",

                    <p className='list-paragraph'>

                        <ul>
                            <li>Explosions are cool</li>
                            <li>It must be ridiculous and over the top</li>
                            <li>Make players laugh</li>
                            <li>Physics creates unexpected and hilarious situations</li>
                            <li>Difficult at first, but player becomes ultra powerful</li>
                            <li>Powerscaling Anime inspiration</li>
                            <li>Simple to get into but provide a lot of depth in terms of upgrades (treat game as a sandbox)</li>
                        </ul>

                    </p>,
                    require("./Assets/ehgvids/9001 round 2.mp4")


                )
            }
            {

                contentChunk("Gameplay",


                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(0)}></img>
                        <pre className='pre-tag-full reset-left'>
                            <ul class="list-paragraph">
                                {/*        <p>Player spawns into a world and waves of enemies start coming in<br />each wave needs to be totally killed off before the next one comes in</p>

                  <p>Players level up after collecting XP from slain monsters, when the player levels up, they get to choose how to upgrade their character, these upgrades are random</p>
                  <p>After the player completes a boss wave, a loot chest will spawn that will let players upgrade their gear, which provides passive stats</p>
                  <p>After the invasion goes sideways the world physically transforms into a lava wasteland, making the game even more difficult<br></br>
                  At this stage, the mobility of the player will come handy
                  
                  </p>
        */}
                                <p>Gameplay loop can be summarized by the following:</p>
                                <ul class='list-paragraph2'>
                                    <li>Walk into an encounter (island)</li>
                                    <li>Complete encounter by killing an enemy for example</li>
                                    <li>Repeat</li>
                                </ul>
                                <p>Combat loop can be summarized by the following</p>
                                <ul class='list-paragraph2'>
                                    <li>Pseudo turn based</li>
                                    <li>Player can attack enemies up to 3 times in a row (attack speed works as a modifier), before they force an attack unto you</li>

                                    <li>Missing a dodge window is punished by large amount of damage or knockback</li>

                                    <li>Player hits enemy, eventually kills it, and picks up xp</li>

                                    <li>Player levels up, and gets stronger abilities</li>

                                    <li>Repeat</li>
                                </ul>
                                <p className=" list-paragraph2">
                                    <p>The game starts with the player being reincarnated in the world, starting with no items</p>
                                    <p>Player will walk into nearby encounters, completing them rewards the player with xp,<br></br>and with enough xp the player can level up their abilities</p>
                                </p>
                            </ul>

                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(2)}></img>
                    </div>,
                    //   require("./Assets/ehgvids/9001 round 2.mp4")


                )
            }
            {

                contentChunkWithVideo("Animation system",

                    <div className='list-paragraph'>
                        <p className='list-paragraph2'>
                            What makes anime great is the animation,<br></br> this means that the game needs a very robust animation system,<br></br>where every little detail can be adjusted using variables.
                        </p>
                        <p className='list-paragraph2'>
                            Combat should look visually different based on player's stats,
                            If player has a lot of strength, the hits should reflect that.
                            <br></br>This is achieved with custom animation system that dynamically cuts animations into keyframes
                            <br></br><b>Keyframes for attacks are as following:</b>
                            <li>Transition (transition from whatever state the skeleton currently is in, this includes physics blending)</li>
                            <li>Charge up (charge up state, for example raise weapon, ready to attack)</li>
                            <li>Charge up alert(primarly used for enemy ai to let the player know, now is time to dodge)</li>

                            <li>Collider (this is when hit can occur, also defined hitstop)</li>

                            <li>Collider to end(finishes the animation)</li>

                            <li>Exit (transition back to default state)</li>
                        </p>

                        {/*
              <p className='list-paragraph'>Third person controller, as being able to see the physical difference in appearance is big part about the game.
                <br></br>   Combat works by automatically targeting nearest enemy
                <br></br>Camera can orbit around the player, but rotating it is not neccesary for combat, as action should be the thing that is moving, not the camera.
                <div className='btn'>Read more</div></p>
        */     }


                    </div>,
                    require("./Assets/ehgvids/high asms.mp4")


                )
            }
            {

                contentChunk("Abilities",

                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(4)}></img>
                        <pre className='pre-tag reset-left'>
                            Abilities are the base building blocks for creating a custom superheroes
                            <div className='list-paragraph2'>
                                Only mobility & basic attacks are actually REQUIRED to complete a run.
                                <br></br>Anything else is just to make the game more interesting
                            </div>
                            <ul>
                                {
                                    renderArray([

                                        simpleListItemP("Mobility (Left Shift)",
                                            <div className='list-paragraph2'>
                                                Used to dodge / gapclose enemies<br></br>
                                                Upgrades to dash
                                            </div>),

                                        simpleListItemP("Basic attacks (Mouse buttons for individual arms)",
                                            <div className='list-paragraph2'>
                                                Basic attacks are designed to be simple, but to grow more complex as you combine upgrades together
                                                <ul>
                                                    <li>Punches / Sword attacks</li>

                                                    <li>Magic projectiles</li>
                                                </ul>
                                            </div>),
                                        simpleListItemP("Utilities (Q)",
                                            <div className='list-paragraph2'>
                                                Utilities are skills that let you travel between encounters faster<br></br>

                                                <li>Flight</li>
                                                <li>Grappling hook</li>
                                                <li>Horse</li>

                                            </div>),
                                        simpleListItemP("Special attack (R)",
                                            <div className='list-paragraph2'>
                                                Anime finisher move, this animation can use both arms, will use significantly different design from basic attacks.
                                                For example, a finisher move would be a skill that lets you charge all of your mana into a projectile, increasing it size.
                                            </div>),

                                        simpleListItemP("Powerup mode (X)",
                                            <div className='list-paragraph2'>
                                                Powerup increases base stats<br></br>
                                                And unlocks powerup only upgrades when active, these will be extremely overpowered by design, such as erasin enemies from existance
                                            </div>),

                                        /*
                                        simpleListItem("Basic melee attack", "1"),
                                        simpleListItem("Blocking", "2"),
                                        simpleListItem("Movement ability", "Start with a roll, used to dodge enemy attacks, eventually upgrades to flight"),
                                        simpleListItem("Fire Projectiles", ""),
                                        simpleListItem("Gather energy", ""),
                                        simpleListItem("Ultimate attack", "Freezes enemies while gapclosing to target, lets player aim where to knock enemies"),
                                        simpleListItem("Apeshit mode", "Increase base stats & unlock powerup mode only upgrades, these upgrades are incredibly powerful by design, like being able to erase enemies from existance")
                                      */
                                    ])
                                }

                            </ul>
                            {/*
                <div className='btn'>Read more</div>
                */}
                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(6)}></img>
                    </div>
                    ,
                    //   require("./Assets/ehgvids/9001 round 2.mp4")


                )
            }


            {

                //contentChunkWithVideo("Progression",
                contentChunk("Progresssion",
                    <div className='pre-tag-full' >
                        <div className='content-wrapper  level-design'>
                            <div className='pre-tag-img '>

                                <img src={require("./Assets/levelup.png")}></img>
                                <img src={require("./Assets/levelup2.png")}></img>

                            </div>
                            <div className='pre-tag reset-left'>
                                <p className='list-paragraph list-paragraph2'>
                                    <p >
                                        Player progression is tied to a level that should be a clear indication of how far the player is in the game, level 50 player should be able to beat level 10 enemy VERY easily, while level 100 enemy should be giving player hard time

                                    </p>
                                    <p className='list-paragraph2'>


                                    </p>


                                    <p>
                                        <p className='list-paragraph2'> When player meets xp threshold, they level up, and get random choices on how to improve their character, these choices are
                                        </p>
                                        <ul>


                                            <li>Stat increase <br></br>
                                                <p className='list-paragraph2'>flat level boost</p></li>

                                            <li>Basic attack <br></br>
                                                <p className='list-paragraph2'>only applies during basic attack, may have cooldown. <br></br>for example, melee shockwave adds extra knockback on attack, every 8 seconds.</p></li>

                                            <li>Special attack <br></br>
                                                <p className='list-paragraph2'>Strong skill, designed to be anime finisher move, creates synergy with gear.<br></br>for example, a projectile that scales until you ran out of mana, encouraging players to stack as much mana in their gear as possible.</p></li>

                                            <li>Powerup <br></br>
                                                <p className='list-paragraph2'>Allows players to define how exactly their character should behave when powering up.</p></li>

                                        </ul>
                                    </p>

                                    <p>
                                        When player beats a boss, a loot chest spawns, that gives player gear, that will boost players passive stats:
                                        <ul className='list-paragraph2'>
                                            <li>Health</li>
                                            <li>Max energy</li>
                                            <li>Max mana</li>
                                            <li>Damage</li>

                                            <li>Strength (knockback)</li>

                                            <li>Knockback resistance</li>
                                            <li>Armor</li>
                                            <li>Movement speed</li>

                                        </ul>
                                    </p>
                                    <p>Death mechanics
                                        <p className='list-paragraph2'>Dying will case the player to be reincarnated again, no progression will persist between playthrougs</p>



                                    </p>
                                </p>


                            </div>
                        </div>
                    </div>)
            }






            {

                contentChunk("Level design",

                    <div className='pre-tag-full' >
                        < div className='content-wrapper level-design' >

                            < div className='pre-tag-img ' >

                                <img src={require("./Assets/level pre-destroy.png")}></img>
                                <img src={require("./Assets/level post-destroy.png")}></img>
                            </div>
                            <div className='pre-tag reset-left'>

                                <ul class='list-paragraph'>
                                    <li>Levels are composed of chunks of islands<p className='list-paragraph2'> Islands are filled with encounters, NPC's will not move away from their designated encounter unless disturbed</p></li>
                                    <p className='list-paragraph2'> Levels are destructable to create a sense of the world being destroyed</p>
                                    <li>There shouldn't have to be many props<p className='list-paragraph2'> just enough to make it seem like there might be something living there.</p></li>
                                    {
                                        // <li>Limited amount of props <p className='list-paragraph2'>Every prop on the map should have a purpose, and something can interact with it.</p></li>
                                    }
                                    <li>Not too much noise<p className='list-paragraph2'></p></li>
                                    <li>Seamless world transformations
                                        <p className='list-paragraph2'>when the alien invasion goes sideways, the world turns into a wasteland, and water turns into lava, increasing difficulty.
                                            <br></br>Any destroyed ground is now potentially fatal.</p></li>
                                    <p className='list-paragraph2'>  There are 3 different level states:</p>
                                    <ul className='list-paragraph2'>
                                        <li>Level 1: Standard (water, grass, mountains), no danger for player
                                            <p className="list-paragraph3">Alien invasion begins</p>

                                        </li>

                                        <li>Level 2: Lava (lava, no grass, mountains), lava applies damage over time to player
                                            <p className="list-paragraph3">Invasion is starting to go badly for the player, world turns into ruins</p>


                                        </li>

                                        <li> Level 3 Cosmic floating island, Instant death if falls without mobility (this is not in demo)


                                            <p className="list-paragraph3">World no longer exists, only chunks of land floating in space, but player is still not giving up</p>

                                        </li>
                                    </ul>

                                </ul>
                                {
                                    levelDesignExpanded && <div class='list-paragraph2'>

                                    </div>
                                }

                            </div>


                        </div></div>,
                    //   require("./Assets/ehgvids/9001 round 2.mp4")


                )
            }
            {

                contentChunk("Encounters",

                    <div className='pre-tag-full' >
                        <div className='content-wrapper level-design' >

                            < div className='pre-tag-img ' >

                                <img src={require("./Assets/encounter.png")}></img>

                            </div>
                            <div className='pre-tag reset-left'>

                                <ul class='list-paragraph'>
                                    <li>Encounters are minigames withing the world<p className='list-paragraph2'>
                                        Encounter types:
                                        <ul>Multiple minions</ul>

                                        <ul>Miniboss</ul>
                                        <ul>Bossfight</ul>
                                        <ul>Help npc in need (future)</ul>

                                    </p></li>
                                    <p className='list-paragraph2'>
                                        You can only trigger a bossfight by interacting with an object in the world, its always opt in, and you get to prepare for it.
                                        <br></br>It is possible to combine encounters together, increasing challenge
                                    </p>
                                </ul>
                            </div>
                        </div></div>,
                    //   require("./Assets/ehgvids/9001 round 2.mp4")


                )
            }
            {

                contentChunk("Enemy Design rulebook",


                    <div className='content-wrapper'>

                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                        <pre className='pre-tag reset-left'>
                            <p>Each enemy will be designed with the goal of destroying as much of the world as possible.</p>

                            <p className='list-paragraph2'>  At baseline, enemies should be challenging, and work around this pipeline
                                <ul>
                                    <li>  Chase player
                                    </li>
                                    <li>Alert player that attack is about start
                                    </li>
                                    <li>Finish attack, if player doesnt physically dodge the attack, enemy may continue with a combo, to punish player further
                                    </li>
                                </ul>

                            </p>
                            Colossal boss (none of these in demo)
                            <ul class='list-paragraph list-paragraph2'>
                                <li>Final boss type</li>
                                <li>Size of the entire level</li>

                                <li>Destroys large chunks of the world with simple moves</li>

                                <li>Takes no damage except on the critical spots, player would have to climb on top of them to deal damage to them</li>

                            </ul>
                            Boss
                            <ul class='list-paragraph list-paragraph2'>
                                <li>Player dodges powerful attack, missing rewards player with a window to fight back</li>
                                <li>Massive environmental damage</li>
                                <li>2-3 different offensive moves</li>
                                <li>dev time ~2 weeks</li>
                            </ul>
                            Minions
                            <ul class='list-paragraph list-paragraph2'>

                                <li>Chase 1 objective (player/healer target)</li>
                                <li>1 Move</li>
                                <li>used as a Break for the player between bosses</li>
                            </ul>
                            Glass cannon
                            <ul class='list-paragraph list-paragraph2'>

                                <li>Deal large amounts of damage to environment</li>
                                <li>Easily taken down</li>
                            </ul>
                            {
                                enemyDesignExpanded && (<div className="list-paragraph2"><p>

                                </p>

                                </div>)
                            }
                            {/*
                <div className='btn' onClick={() => {

                  setEnemyDesignExpanded(!enemyDesignExpanded);
                }}>Read more</div>
        */}
                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                    </div>,
                    //   require("./Assets/ehgvids/9001 round 2.mp4")


                )
            }
            {

                contentChunk("Art style",
                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(0)}></img>
                        <pre className='pre-tag reset-left'>
                            <p>
                                Art style key points
                                <ul>
                                    <li>Low poly</li>
                                    <li>Cell shaded outline</li>
                                    <li>Comic</li>

                                    <li>Clay</li>

                                    <li>Childs drawing book</li>

                                    <li>Giant eyeballs</li>

                                    <li>Players should ask, what even is that thing?</li>

                                </ul>
                            </p>
                            {
                                // artStyleExpanded && 
                                (<div className='list-paragraph2'>
                                    <p>
                                        The gameplay is already very loud and noisy, so simple colors end up balancing with that really well.
                                        Individual pixels are not as important when it comes to character art, since most of the time they will be flying so fast across the screen, that you cannot see them anyway.
                                    </p>
                                    <p>
                                        Characters are created in blender, by sculpting a high poly model first, and then creating a shrinkwrap low poly model thats used in the game,
                                        extra detail is added through a baked normal map.
                                    </p>
                                    <p>The weirder the monsters look, the better it is.</p>

                                </div>)
                            }
                            {/*
                <div className='btn' onClick={() => {

                  setArtStyleExpanded(!artStyleExpanded);
                }}>Read more</div>
        */}
                        </pre>


                        <img className="monster-img" src={fetchMonsterImage(3)}></img>
                    </div>,

                )
            }
            {

                contentChunk("Screenshots",
                    <div className='gallery'>{images}</div>
                )
            }

            {

                contentChunk("Fan art",
                    <div className='gallery'>
                        <img className="gallery-image" src={require("./Assets/ehgfanart/fanart1.jpg")}></img>

                        <img className="gallery-image" src={require("./Assets/ehgfanart/fanart2.jpg")}></img>
                    </div>
                )
            }

            {

                contentChunk("Story",

                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                        <pre className='pre-tag reset-left'>

                            <p class='list-paragraph'>
                                <p>player Character personality is childish, dont take things too seriously, but has a serious side aswell</p>
                                <p className='list-paragraph2'>The game is by no means story driven, but small part of lore exists to explain why enemies are the way they are.</p>

                                <p>The colossal planet-devouring spaghetti monster is on its way<br></br>
                                </p>
                                <p className='list-paragraph2'>there's one problem though, the monster can't quite chew planets in one go. <br></br>
                                    So they send a group of interdimensional monsters to blow the planet into atoms.<br></br>
                                </p>

                                {
                                    //     <p className='list-paragraph2'> so the monster can consume the planet no problem.</p></p>
                                }
                                <p>The invasion is the 9-5 job for these monsters<br></br>
                                    <p className='list-paragraph2'> they don't really want to be there, and they fight carelessly,
                                        sometimes even using each other as projectiles just to destroy the world faster.<br></br>
                                        A Boss monster might sit down on a beach chair, put on the shades, eat icecream, and watch their minions do their thing.
                                    </p></p>

                            </p>

                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(2)}></img>
                    </div>
                    //  <div className='gallery'>{images}</div>
                )
            }
            {

                contentChunk("Inspiration",
                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                        <pre className='pre-tag reset-left'>
                            <p class='list-paragraph'>
                                EHG Takes inspiration from videogames and anime, its an amalgamation of things that i'd personally like to see in a videogame, such as
                                <ul className=' list-paragraph2'>
                                    <li>Dodging based combat (Dark Souls / Witcher 3)</li>
                                    <li>Unique spell crafting (Vampire survivors, Hades)</li>
                                    <li>Mobile character controller (Sly Cooper series / Worms 3D)</li>
                                    <li>Unpredictable / hilarious nature of game physics (Totally Accurate Battle Simulator)</li>
                                    <li>Over the top powerscaling (Dragonball / One Punch Man)</li>
                                </ul>
                            </p>
                            {/*      <ul>
                  <li>
                    <p>Anime: Dragonball</p>
                  </li>
                  <li>
                    <p>Anime: One Punch Man</p>
                  </li>
                  <li>
                    <p>Game: Totally Accurate Battle Simulator</p>
                  </li>
                  <li>
                    <p>Game: Dark Souls</p>
                  </li>
                  <li>
                    <p>Game: Vampire Survivors</p>
                  </li>
                  <li>
                    <p>Game: Stick figure flash games</p>
                  </li>
                </ul>
        */}
                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(2)}></img>
                    </div>
                )
            }
            {

                contentChunk("Technicals",


                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                        <pre className='pre-tag reset-left'>
                            <p className='list-paragraph'>
                                <ul>
                                    <li>
                                        <p>Unity 2022</p>
                                    </li>
                                    <li>
                                        <p>Custom animation pipeline (EHG engine)</p>
                                    </li>

                                    <li>
                                        <p>IK: Final IK & foot animator</p>
                                    </li>

                                    <li>
                                        <p>Terrain deformation: Modified digger</p>
                                    </li>

                                    <li>
                                        <p>URP (shadergraph & vfxgraph)</p>
                                    </li>

                                    <li>
                                        <p>Custom built character controller</p>
                                    </li>

                                    <li>
                                        <p>Custom built ability system</p>
                                    </li>
                                </ul>
                            </p>
                            {
                                //technicalsExpanded &&
                                <div>
                                    <p className='list-paragraph2'>
                                        This diagram describes the simplified code structure of EHG engine 0.3.
                                        <br></br>All major components are connected together with eventbus,
                                        i wrote an article about it on my <a href="https://samulisalonen.dev/#/article/eventbus">Here</a>
                                    </p>
                                    <img className="code-architecture" src={require("./Assets/ehg3.png")}></img>
                                </div>
                            }
                            {
                                /*<div className='btn' onClick={() => {
                                setTechnicalsExpanded(!technicalsExpanded);
              
                              }}>Read more</div>
                            */
                            }
                        </pre>

                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                    </div>,
                    //   require("./Assets/ehgvids/9001 round 2.mp4")


                )
            }
            {

                contentChunk("Team",
                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                        <pre className='pre-tag list-paragraph reset-left'>
                            <ul>
                                <li>
                                    Samuli Salonen | <span className='list-paragraph2'>Studio Owner, Programming, Game Design, 3D Modeling, Community manager</span>
                                    <br></br><a className='link' href='https://samulisalonen.dev/'>Portfolio</a>
                                </li>

                                <li>
                                    Marcus Rose |<span className='list-paragraph2'> Level Design, General assistant</span>
                                </li>
                                <li>
                                    Joona lätti | <span className='list-paragraph2'>(trailer) Music</span>
                                </li>
                                <li>
                                    Unity Asset Store | <span className='list-paragraph2'>Animations, Textures, particles and various plugins</span>
                                </li>
                            </ul>
                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(2)}></img>
                    </div>

                )
            }
            {

                contentChunk("Roadmap",

                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                        <pre className='pre-tag reset-left'>
                            Updated roadmap since 29.12.2024


                            <ul className=' list-paragraph2'>
                                <li>Make survivors gamemode fully playable</li>
                                <li>Improve campaign map melee combat</li>
                                <li>Implement grappling hook and horse Utilities into campaign map</li>

                                <li>Steam leaderboards</li>

                            </ul>
                            Major milestones achieved in 2024:
                            <ul className=' list-paragraph2'>
                                <li>Soulslike combat engine that makes developing challenging bosses possible.</li>
                                <li>General physics animation improvements</li>

                            </ul>

                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(2)}></img>
                    </div>
                    //  <div className='gallery'>{images}</div>
                )
            }
            {

                contentChunk("Budget",
                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(1)}></img>
                        <pre className='pre-tag reset-left'>
                            <div className=' list-paragraph2'>
                                please email me at </div>salonen.samuli1@gmail.com
                            <div className=' list-paragraph2'> if you wish to get access to the budget information.
                            </div>

                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(2)}></img>
                    </div>

                )
            }

            {

                contentChunk("Marketing",
                    <div className='content-wrapper'>
                        <img className="monster-img" src={fetchMonsterImage(1)}></img>

                        <pre className='pre-tag list-paragraph reset-left'>
                            <ul>

                                <li>
                                    Twitch development livestream
                                </li>
                                <li>
                                    Funny / ridiculous gameplay clips
                                </li>
                                <li>
                                    Devlogs about things that i learned about game development
                                </li>

                            </ul>


                            <div className=' list-paragraph2'>
                                Game is best suited for people who like to bootup a game a turn their brain off, and smack some aliens with Dragonball / One Punch Man style ridiculous combat.
                                <p><br></br>             <div className=' list-paragraph2'>People who like to experiment with things are most likely find the game most enjoyable, as at its core it is a roguelite, with some souls like elements to keep things interesting.</div>
                                </p>
                                <p>
                                    <br></br><div className=' list-paragraph2'>But its not a true souls like where "difficulty" is a feature, rather bosses are hard at first to create sense of progression when you finally do get strong.</div>
                                </p>

                            </div>
                        </pre>
                        <img className="monster-img" src={fetchMonsterImage(2)}></img>
                    </div>

                )
            }
        </>
    );

}

export default Pitchdeck;