import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./List.css"

const Lists = () => {
  return (
    <div>
      <Navbar/>
      <Header  type="list"/>

      <div className="listcon">
        <div className="listwrapper">
          <div className="listsearch">

          </div>

          <div className="listresult">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists
