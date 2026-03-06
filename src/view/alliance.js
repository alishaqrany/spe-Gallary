import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';

const Alliance = () => {
    return (<>
      <Header/>
        <div className='container text-center' style={{ paddingTop: 30 }}>
          <h1 className='text-white1'>تحالف وتنمية</h1>
          <div className='infback' style={{ padding: 30, marginTop: 20 }}>
            <p className='widget20'>
              يهدف برنامج تحالف وتنمية إلى بناء شراكات استراتيجية مع المؤسسات المحلية والدولية
              لتعزيز التنمية المستدامة وتبادل الخبرات في مجالات التعليم والبحث العلمي وخدمة المجتمع.
            </p>
          </div>
        </div>
      <Footer/>
    </>)
}

export default Alliance
