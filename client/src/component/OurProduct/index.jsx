import React from 'react'
import './index.scss'
import OurProductSwiper1 from './OurProductSwiper1'
import OurProductSwiper2 from './OurProductSwiper2'
import Title from '../Title'
function OurProduct() {
  return (
    <div className='container'>
      <Title data={"Our Products"} dota={'Explore Our Products'}></Title>
        <OurProductSwiper1/>
        <OurProductSwiper2/>
        <div className="btn">
        <button>View All Products</button>
        </div>
    </div>
  )
}

export default OurProduct