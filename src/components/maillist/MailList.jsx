import React from 'react'
import "./MailList.css"
const MailList = () => {
  return (
    <div className='mail'>
      <h1 className="mailtitle">Save time, save money</h1>
      <span className="maildesc">Sign up and we'll send the best deals to you</span>
      <div className="mailinputCon">
        <input type="text" placeholder='Your Email'></input>
        <button>Subscribe</button>

      </div>
    </div>
  )
}

export default MailList
