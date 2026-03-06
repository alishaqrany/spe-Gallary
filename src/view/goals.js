import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';
import Info from '../components/info'

const Goals = () => {
    return (<>
      <Header/>
        <div className='infback'>
        <Info />
    </div>
    <Footer/>
    </>
    )
}

export default Goals
