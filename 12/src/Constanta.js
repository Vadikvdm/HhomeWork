import React, { useState } from 'react';
import Information from './Information';
import Post from './Post';
import './App.css';
import "./menu.scss"

export default function Constanta() {
const img = <svg id="Filled" 
  viewBox="0 0 24 24" 
  width="24" 
  height="24"
  fill='azure'
><path d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM16.718,9.717l-4.272,4.272a1.873,1.873,0,0,1-1.335.553h-.033a1.872,1.872,0,0,1-1.345-.6l-2.306-2.4A1,1,0,1,1,8.868,10.16L11.112,12.5,15.3,8.3a1,1,0,0,1,1.414,1.414Z"/></svg>;
  const arrow = <svg id="Outline" 
  viewBox="0 0 24 24" 
  width="12" 
  height="12"
  fill='lightslategrey'
  ><path d="M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z"/></svg>
  return (
    <div  className='infomation'> 
     <img className='avka' src='https://img.yakaboo.ua/media/catalog/product/0/3/03_64_103.jpg'></img>
      <div className='commonInfo'>
        <div className='infoAutor'>
          <div className='nickName'></div>
          <div className='nameAutor'>Anakin skywalker</div>
          <div>{img}</div>
          <div className='datePost'>2022.02.03</div>
          <div className='hideArrow'>{arrow}</div>
        </div>
        <div className='writePost'>WTF? Who is Ray? Why she is Skywalker? Luke...?</div>
      </div>
      
    </div>
  )
}


