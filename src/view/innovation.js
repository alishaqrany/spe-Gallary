import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';

const Innovation = () => {
    return (<>
      <Header/>
        <div className='container text-center' style={{ paddingTop: 30 }}>
          <h1 className='text-white1'>الابتكار وريادة الاعمال</h1>
          <div className='infback' style={{ padding: 30, marginTop: 20 }}>
            <p className='widget20'>
              تدعم الكلية ثقافة الابتكار وريادة الأعمال من خلال توفير بيئة محفزة للإبداع والتفكير الريادي،
              وتنظيم ورش العمل والمسابقات والحاضنات التكنولوجية التي تساعد الطلاب على تحويل أفكارهم
              إلى مشاريع ناجحة.
            </p>
          </div>
        </div>
      <Footer/>
    </>)
}

export default Innovation
