import React from 'react'
import "./index.scss"
import foto from '../../../assets/img/foto.png'
import star from '../../../assets/img/Vector.png'
import boshulduz from '../../../assets/img/boshulduz.png'
function OurProElemet1() {
    return (
        <div>
            <div className="container">
                <div className="main">
                    <div className='imgbox'>
                        <img src={foto} alt="" />
                    </div>
                </div>
                <div className='content'>
                    <p className='p1'>
                        CANON EOS DSLR Camera
                    </p>
                    <div className="pricebox">
                        <div className='price'>
                            1236TL
                        </div>
                        <div className="rating">
                        <div className="ulduz">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={boshulduz} alt="" />
                            <img src={boshulduz} alt="" />
                        </div>
                        <div className="deyeri">
                            (75)
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OurProElemet1