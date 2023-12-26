import React from 'react'
import './index.scss'
import yukmasini from '../../assets/img/Frame 701.png'
import yukmasini2 from '../../assets/img/Frame 702.png'
import yukmasini3 from '../../assets/img/Frame 704.png'
function Catdirilma() {
  return (
    <div id='catdirilma'>
        <div className="container">
            <div className="imgbox">
                <img src={yukmasini} alt="" />
            </div>
            <div className="imgbox">
                <img src={yukmasini2} alt="" />
            </div>
            <div className="imgbox">
                <img src={yukmasini3} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Catdirilma