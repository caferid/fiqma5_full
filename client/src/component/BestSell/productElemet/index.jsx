import React from 'react'
import "./index.scss"
import best_sell_1 from '../../../assets/img/best_sell_1.png'
import star from '../../../assets/img/Vector.png'
import boshulduz from '../../../assets/img/boshulduz.png'
function BestSellElemet() {
  return (
    <div>
        <div className="container">
            <div className="main">
                <div className='imgbox'>
                    <img src={best_sell_1} alt="" />
                </div>
            </div>
            <div className='content'>
                <p className='p1'>
                The north coat
                </p>
                <div className="pricebox">
                <div className='price'>
                    260TL
                </div>
                <div className="endirimli">
                    190tl
                </div>
                </div>
                <div className="rating">
                    <div className="ulduz">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={boshulduz} alt="" />
                    </div>
                    <div className="deyeri">
                    (75)
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestSellElemet