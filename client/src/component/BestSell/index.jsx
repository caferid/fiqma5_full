import React from 'react'
import './index.scss'
import BestSwiper from './TodaysSwiper'
import Title from '../Title'
function BestSell() {
  return (
    <div className='container'>
         <Title data={"This Month"} dota={'Best Selling Products'}></Title>
        <BestSwiper/>
    </div>
  )
}

export default BestSell