import React, {useState} from 'react'
import "./Publik.scss"

export default function Publik() {
    const sms = <svg 
        width="28" 
        height="28"
        fill='lightslategrey'
        viewBox="0 0 32 32"><title/><g data-name="Layer 2" id="Layer_2"><path d="M27.45,29a2.08,2.08,0,0,1-.9-.21l-5.79-2.9H10a8,8,0,0,1-8-8v-6a8,8,0,0,1,8-8H22a8,8,0,0,1,8,8v6a8,8,0,0,1-1.64,4.85l1,3.73A2,2,0,0,1,27.45,29ZM10,5.89a6,6,0,0,0-6,6v6a6,6,0,0,0,6,6H21a1,1,0,0,1,.45.11l6,3-1.16-4.24a1,1,0,0,1,.22-.92A6,6,0,0,0,28,17.89v-6a6,6,0,0,0-6-6Z"/><path d="M24,19H8a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z"/><path d="M24,13H8a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z"/></g></svg>;
    
    const 
    retweet = <svg
      width="28" height="28" viewBox="0 0 512.000000 512.000000"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill='lightslategrey' stroke="none">
      <path d="M2164 5097 c-21 -18 -28 -35 -32 -76 l-5 -52 238 -239 238 -239 -759 -4 c-830 -4 -797 -1 -923 -64 -73 -36 -188 -151 -224 -224 -60 -120 -57 -42 -57 -1535 0 -1225 2 -1376 16 -1425 54 -185 201 -326 389 -374 109 -28 199 -14 225 34 13 25 13 97 0 121 -15 28 -45 41 -128 56 -93 16 -166 57 -215 120 -71 93 -67 2 -67 1475 0 1311 0 1329 20 1383 26 69 83 134 151 171 l54 30 760 3 760 2 -234 -234 -234 -234 -5 -50 c-4 -46 -2 -54 25 -81 35 -34 71 -46 111 -36 18 4 145 124 376 355 l349 348 -5 52 -5 53 -344 343 -345 344 -51 0 c-40 0 -58 -5 -79 -23z"/><path d="M3708 4482 c-36 -4 -76 -47 -84 -89 -14 -74 44 -133 131 -133 98 0 207 -75 257 -178 l33 -67 0 -1350 0 -1350 -24 -52 c-28 -62 -103 -136 -169 -166 -47 -22 -50 -22 -802 -25 l-755 -3 236 238 c130 131 240 249 244 261 12 40 -4 89 -37 117 -28 24 -39 27 -81 22 l-50 -4 -343 -344 -344 -345 0 -54 0 -54 333 -334 c182 -183 344 -340 359 -348 84 -44 179 22 164 115 -5 30 -42 72 -243 273 l-238 238 750 0 c824 0 816 0 937 61 85 43 178 134 222 218 70 134 66 40 66 1533 0 938 -3 1363 -11 1400 -15 73 -70 183 -119 240 -49 57 -141 119 -218 148 -57 22 -164 38 -214 32z"/></g></svg>
     
     const like = <svg version="1.0"
      width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="lightslategrey" stroke="none">
      <path d="M1190 4825 c-201 -35 -444 -140 -601 -259 -266 -201 -464 -513 -546 -856 -44 -188 -57 -473 -29 -655 73 -476 357 -928 910 -1448 205 -193 348 -319 930 -820 358 -309 538 -457 576 -475 78 -38 182 -38 260 -1 75 37 1141 953 1502 1292 553 519 841 976 914 1452 28 182 15 467 -29 655 -82 343 -280 655 -546 856 -161 122 -402 225 -611 259 -113 19 -344 19 -456 0 -310 -54 -601 -226 -820 -487 -43 -51 -80 -93 -84 -93 -4 0 -41 42 -84 93 -219 261 -510 433 -820 487 -108 18 -358 18 -466 0z m500 -324 c97 -28 259 -108 335 -165 94 -71 220 -202 288 -299 34 -49 74 -107 89 -128 75 -106 241 -106 316 0 15 21 55 79 89 128 68 97 194 228 288 299 78 58 239 137 340 166 70 20 102 23 260 23 197 -1 263 -13 415 -74 337 -137 589 -458 676 -861 26 -121 27 -439 1 -560 -95 -442 -394 -839 -1104 -1468 -369 -327 -1118 -962 -1129 -958 -15 6 -882 749 -1119 960 -712 632 -1006 1024 -1102 1466 -26 121 -25 439 1 560 101 465 409 805 825 909 111 29 121 29 296 26 128 -2 175 -7 235 -24z"/></g></svg>;
    
    const loads = <svg width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="lightslategrey" stroke="none">
      <path d="M2490 4918 c-27 -14 -50 -36 -62 -58 -17 -33 -18 -102 -18 -1535 l0 -1500 -342 342 c-189 187 -357 348 -375 357 -140 70 -278 -103 -184 -230 40 -54 950 -959 980 -974 42 -22 117 -15 159 14 60 42 970 958 981 989 36 94 -15 196 -105 213 -86 16 -82 19 -461 -359 l-353 -351 0 1499 c0 1433 -1 1502 -18 1535 -20 38 -89 80 -132 80 -14 0 -46 -10 -70 -22z"/> <path d="M97 2636 c-46 -17 -64 -32 -83 -67 -12 -24 -14 -147 -14 -781 0 -477 4 -777 11 -818 65 -405 415 -733 834 -780 123 -14 3307 -14 3430 0 419 47 769 375 834 780 7 41 11 339 11 810 0 713 -1 746 -19 774 -63 96 -212 88 -263 -14 -17 -32 -18 -90 -18 -756 0 -679 -1 -725 -19 -796 -49 -192 -181 -354 -354 -437 -134 -64 -25 -61 -1887 -61 -1862 0 -1753 -3 -1887 61 -123 59 -243 175 -301 294 -70 141 -66 90 -72 937 -5 755 -5 767 -26 794 -45 61 -110 83 -177 60z"/></g></svg>;
    
    const [counter, setCounter] = useState(0);
     const hendleUp = () => {
      setCounter((addCount) => {
        return addCount + 1;
      })
      
    }

    return (
    <div id='downIcons'>
      <div id='sms'>
        <div className='button' onClick={1}>{sms}</div>
        <div id='countSms'>{432}</div>
      </div>
      <div id='retweet'>
        <div className='button' onClick={hendleUp} >{retweet}</div>
        <div id='countretweet'>{counter}</div>
      </div>
      <div id='like'>
        <div  className='button' onClick={1}>{like}</div>
        <div id='countLike'>{258}</div>
        </div>
      <div>{loads}</div>
    </div>
  )
}
