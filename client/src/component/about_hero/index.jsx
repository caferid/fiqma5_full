import React from 'react'
import './index.scss'
import abouthero from '../../assets/img/abouthero.png'
function About_hero() {
  return (
    <div id='abouthero'>
        <div className="container">
            <div className="text">
                <div className="title">
                Our Story
                </div>
                <div className="smalltitle">
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>

                </div>
            </div>
            <div className="imgbox">
                <img src={abouthero} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About_hero