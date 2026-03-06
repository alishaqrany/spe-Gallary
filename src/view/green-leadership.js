import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';

const GreenLeadership = () => {
    return (<>
      <Header/>
        <div className='container text-center' style={{ paddingTop: 30 }}>
          <h1 className='text-white1'>مشروع الريادة الخضراء</h1>
          <h3 className='text-white1'>المجمع الذكي لتعزيز الانتاجية الزراعية</h3>
          <div className='infback' style={{ padding: 30, marginTop: 20 }}>
            <p className='widget20'>
              مشروع الريادة الخضراء هو مبادرة رائدة تهدف إلى إنشاء مجمع ذكي لتعزيز الإنتاجية الزراعية
              باستخدام أحدث التقنيات والابتكارات في مجال الزراعة الذكية والمستدامة، بما يسهم في تحقيق
              الأمن الغذائي والتنمية المستدامة.
            </p>
          </div>
        </div>
      <Footer/>
    </>)
}

export default GreenLeadership
