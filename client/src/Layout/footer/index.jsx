import React from 'react'
import './index.scss'
import send from '../../../src/assets/img/icons/icon-send.png'
import qr from '../../../src/assets/img/icons/Qrcode 1.png'
import googlestore from '../../../src/assets/img/icons/googlestore.png'
import applestore from '../../../src/assets/img/icons/download-appstore.png'
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className='col_1'>
            <div className="box">
              <div className="small_box">
                <h4>
                  Exclusive
                </h4>
                <p>
                  Subscribe
                </p>
              </div>
              <p>Get 10% off your first order</p>
            </div>
            <div className="sendmail">
              <input type="text" placeholder='Enter your email' />
              <div>
                <img src={send} alt="" />
              </div>
            </div>
          </div>
          <div className='col_2345'>
            <h4>
              Support
            </h4>
            <div className="big_box">
              <div className="box_1">
                111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
              </div>
              <div className="box">
                exclusive@gmail.com
              </div>
              <div className="box">
                +88015-88888-9999
              </div>
            </div>
          </div>
          <div className='col_2345'>
            <h4>
              Account
            </h4>
            <div className="big_box">
              <div className="box">
                My Account
              </div>
              <div className="box">
                Login / Register
              </div>
              <div className="box">
                Cart
              </div>
              <div className="box">
                Wishlist
              </div>
              <div className="box">
                Cart
              </div>
            </div>
          </div>
          <div className='col_2345'>
            <h4>
              Quick Link
            </h4>
            <div className="big_box">
              <div className="box">
                Privacy Policy
              </div>
              <div className="box">
                Terms Of Use
              </div>
              <div className="box">
                FAQ
              </div>
              <div className="box">
                Contact
              </div>

            </div>
          </div>
          <div className='col_6'>
            <h4>
              Download App
            </h4>
            <div className="big_box">
              <div className="up">
              Save $3 with App New User Only
              </div>
              <div className="down">
                <div className="left">
                  <img src={qr} alt="" />
                </div>
                <div className="right">
                  <div className="up">
                    <img src={googlestore} alt="" />
                  </div>
                  <div className="down">
                    <img src={applestore} alt="" />
                  </div>
                  
                </div>
              </div>



            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Footer