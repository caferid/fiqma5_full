import React from 'react'
import Header from '../Layout/header'
import Todays from '../component/Todeys'
import ByCatagory from '../component/ByCatagory'
import BestSell from '../component/BestSell'
import Experience from '../component/Experience'
import OurProduct from '../component/OurProduct'
import NewArrival from '../component/NewArrival'
import Catdirilma from '../component/catdirilma'

function Home() {
  return (
    <div>
      <Header/>
      <Todays/>
      <ByCatagory/>
      <BestSell/>
      <Experience/>
      <OurProduct/>
      <NewArrival/>
      <Catdirilma/>

    </div>
  )
}

export default Home