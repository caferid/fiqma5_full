import React from 'react'
import './index.scss'
import sesucaldici from '../../assets/img/sesucaldici.png'
function Experience() {
  return (
    <div id='Eperience'>

    <div className='container'>
        <div className="main">
            <div className="left">
            <p>Categories</p>
            <h4>
            Enhance Your Music Experience
            </h4>
            <div className="days">
                <div className="day">
                    <div className="content">
                        <span>24</span>
                        <p>Hours</p>
                    </div>
                </div>
                <div className="day">
                    <div className="content">
                        <span>24</span>
                        <p>Hours</p>
                    </div>
                </div>
                <div className="day">
                    <div className="content">
                        <span>24</span>
                        <p>Hours</p>
                    </div>
                </div>
                <div className="day">
                    <div className="content">
                        <span>24</span>
                        <p>Hours</p>
                    </div>
                </div>
            </div>
            <div className='btnt'>
                <button>Buy Now!</button>
            </div>
            </div>
            <div className="raigt">
                <img src={sesucaldici} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience