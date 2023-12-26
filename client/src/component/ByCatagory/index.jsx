import React from 'react'
import './index.scss'
import BySwiper from './BySwiper'
import Title from '../Title'
function ByCatagory() {
  return (
    <div className='container'>
    <Title  data={"Categories"} dota={'Browse By Category'}></Title>
    <BySwiper/>
    </div>
  )
}

export default ByCatagory