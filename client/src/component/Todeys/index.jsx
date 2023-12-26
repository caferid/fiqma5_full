import React from 'react'
import TodaysSwiper from './TodaysSwiper'
import './index.scss'
import Title from '../Title'
function Todeys() {
  return (
    <div className='container'>
      <Title data={"Today’s"} dota={'Flash Sales'}> </Title>
        <TodaysSwiper/>
        <div className="btn">
        <button>View All Products</button>
        </div>
    </div>
  )
}

export default Todeys