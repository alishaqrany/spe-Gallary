import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';
import Newsdata from '../components/news-data';

const News = () => {
    return (<>
      <Header/>
      <h1 className="text-center">  اخبار الموقع </h1>
        <div className="container infback">
        <Newsdata />
        </div>
    <Footer/>
    </>
    )
}

export default News
