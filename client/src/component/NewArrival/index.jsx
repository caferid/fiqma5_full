import React from 'react'
import './index.scss'
import ps5 from '../../assets/img/ps5.png'
import woman from '../../assets/img/woman.png'
import amazon from '../../assets/img/amazon.png'
import etir from '../../assets/img/etir.png'
import Title from '../Title'
function NewArrival() {
    return (
        <div id="new-arrival">
            <div className='container'>
            <Title data={"Featured"} dota={'New Arrival'}></Title>
                <div className="main">
                    <div className="div1">
                        <img src={ps5} alt="" />
                    </div>
                    <div className="div4">
                        <img src={woman} alt="" />
                    </div>
                    <div className="div2">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="div3">
                        <img src={etir} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewArrival