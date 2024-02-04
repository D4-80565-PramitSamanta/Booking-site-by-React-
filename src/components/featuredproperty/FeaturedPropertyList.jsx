import React from 'react'
import "../featuredproperty/FeaturedPropertyList.css"
const FeaturedPropertyList = () => {
  return (
    <div className="fp">
          <div className="fpitem">
              <img className='fpimg' src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" />
              <span className="fpname">Aparthotel Stare Miasto</span>
              <span className="fpcity">Old Town, Poland, Kraków</span>
              <span className="fpprice">₹ 9,275</span>
              <div className="fprating">
                  <button>8.7</button>
                  <span>Excellent</span>
              </div>
          </div>

          <div className="fpitem">
              <img className='fpimg' src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="" />
              <span className="fpname">Leman Locke</span>
              <span className="fpcity">Tower Hamlets, London</span>
              <span className="fpprice">₹ 12,176</span>
              <div className="fprating">
                  <button>8.8</button>
                  <span>Excellent</span>
              </div>
          </div>

          <div className="fpitem">
              <img className='fpimg' src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o=" alt="" />
              <span className="fpname">3 Epoques Adrez Living</span>
              <span className="fpcity">Prague 1, Czech Republic</span>
              <span className="fpprice">₹ 6,700</span>
              <div className="fprating">
                  <button>8.7</button>
                  <span>Excellent</span>
              </div>
          </div>

          <div className="fpitem">
              <img className='fpimg' src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" />
              <span className="fpname">7Seasons Apartments Budapest</span>
              <span className="fpcity">Terézváros, Hungary, Budapest</span>
              <span className="fpprice">5,468</span>
              <div className="fprating">
                  <button>8.5</button>
                  <span>Excellent</span>
              </div>
          </div>


    </div>
  )
}

export default FeaturedPropertyList
