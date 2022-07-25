import React from 'react'
import Constanta from './Constanta'
import Post from './Post'

export default function Information() {
  const stil = {
    height: '300px',
    width: '680px',
    backgroundImage: 'url(https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale)',
    backgroundSize: 'cover',
    borderRadius: '10px',
    marginTop: '10px',
    marginLeft: '90px',
  }
  return (
    <div>
      <div style={stil}></div> 
    </div>
  );
}
