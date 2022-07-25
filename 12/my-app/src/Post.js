import React from 'react'
import Constanta from './Constanta'
import Information from './Information'
import Publik from './Publik'

export default function Post() {
    const boxWindow = {
        height: '500px',
        width: '800px',
        border: '1px solid rgb(158, 204, 30)',
        backgroundSize: 'cover',
        borderRadius: '10px',
        
        
      }
  return (
    <div style={boxWindow}>
        
        <Constanta />
        <Information />
        <Publik />
    </div>
  )
}
