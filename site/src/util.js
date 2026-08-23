import React, { useEffect, useState } from 'react';

//clip of standard gameplay [third person controller]
//clip of gear changing [progression]
//clip of levelup sequence [progression]
//clip of level showcase
//screenshots of player with transparency
//update screenshot array with more up to date pics
const fetchMonsterImage = (monsterNum) => {//const imgCount = 3;
  /*
  const incrementMonsterNum = () => {
    if (monsterNum > imgCount) {
      setMonsterNum(0);
    }
    else {
      setMonsterNum(monsterNum + 1);
    }
  }*/

  let output = null;
  if (monsterNum == 0)
    output = require("./Assets/ehgmonsters/tablemonster.png");

  if (monsterNum == 1)
    output = require("./Assets/ehgmonsters/sphagettimonster1.png");


  if (monsterNum == 2)
    output = require("./Assets/ehgmonsters/confusedmonster.png");
  if (monsterNum == 3)
    output = require("./Assets/ehgmonsters/monster1_2.png");
  if (monsterNum == 4)
    output = require("./Assets/ehgmonsters/Spellcast ascended.png");

  if (monsterNum == 5)
    output = require("./Assets/ehgmonsters/snek.png");
  if (monsterNum == 6)
    output = require("./Assets/ehgmonsters/beam.png");

  //  incrementMonsterNum();
  return output;

};

const contentChunk = (title, input) => {
  return (
    <div className='content-chunk'>
      <h3 className='content-chunk-text'><b>{title}</b></h3>
      {input}
      <hr></hr>
    </div>);
};

const contentChunkWithVideo = (title, input1, vid) => {
  return contentChunk(title,
    <div className='content-wrapper'>

      <pre className='pre-tag-full'>
        <div className="block-wrapper">
          <div className="pre-block">
            <video width="640" height="360" controls autoplay>
              <source src={vid} type="video/mp4" />

            </video>
          </div>
          <div className="pre-block">
            {input1}
          </div>
        </div>
      </pre>

    </div>
  )
}
const simpleListItem = (title, description) => {
  return <li><p className='list-title'>{title}</p> <p className='list-paragraph'>{description}</p></li>

};

const simpleListItemP = (title, description) => {
  return <p><p >{title}</p> <p className='list-paragraph'>{description}</p></p>

};

const renderArray = (array) => {
  let output = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    output.push(element);
  }

  return output;
}

const contentChunkWithImages = (title, input1, img1, img2) => {
  return contentChunk(title,
    <div className='content-wrapper'>
      <img className="monster-img" src={fetchMonsterImage(img1)}></img>
      <pre className='pre-tag reset-left'>
        {input1}
      </pre>
      <img className="monster-img" src={fetchMonsterImage(img2)}></img>
    </div >
  )
}

export {fetchMonsterImage, contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages};