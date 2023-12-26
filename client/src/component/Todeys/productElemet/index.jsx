import React from 'react'
import "./index.scss"
import pro1 from '../../../assets/img/g92-2-500x500 1.png'
import star from '../../../assets/img/Vector.png'
import boshulduz from '../../../assets/img/boshulduz.png'
function ProductsElemet() {
  return (
    <div>
        <div className="container">
            <div className="main">
                <div className="endirim">
                    <p>-40%</p>
                </div>
                <div className='imgbox'>
                    <img src={pro1} alt="" />
                </div>
            </div>
            <div className='content'>
                <p className='p1'>
                HAVIT HV-G92 Gamepad
                </p>
                <div className="pricebox">
                <div className='price'>
                    379TL
                </div>
                <div className="endirimli">
                    120tl
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

export default ProductsElemet