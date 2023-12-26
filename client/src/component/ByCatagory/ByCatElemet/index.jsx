import React from 'react'
import './index.scss'
import catagotyE from '../../../assets/img/Category.png'
import catagotyEWithe from '../../../assets/img/CategoryWithe.png'
function ByCatElemet() {
  return (
    <div className='bymain'>
        <div className="img1">
            <img src={catagotyE} alt="" />
        </div>
        <div  className='img2'>
            <img  src={catagotyEWithe} alt="" />
        </div>
        <div className="contentt">
        Phones
        </div>
    </div>
  )
}

export default ByCatElemet