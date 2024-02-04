import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/property/PropertyList'
import FeaturedPropertyList from '../../components/featuredproperty/FeaturedPropertyList'
import MailList from '../../components/maillist/MailList'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Feature</h1>
        <PropertyList/>
        <h1 className='homeTitle'></h1>
        <FeaturedPropertyList/>
        <MailList />
        <Footer/>
        
      </div>
    </div>
  );
}

export default Home
