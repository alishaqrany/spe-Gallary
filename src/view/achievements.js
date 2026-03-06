import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';

const Achievements = () => {
    return (<>
      <Header/>
        <div className='container text-center' style={{ paddingTop: 30 }}>
          <h1 className='text-white1'>انجازات كلية التربية النوعية</h1>
          <div className='infback' style={{ padding: 30, marginTop: 20 }}>
            <p className='widget20'>
              تسعى كلية التربية النوعية دائماً إلى تحقيق التميز والريادة في مختلف المجالات الأكاديمية والبحثية والمجتمعية.
              وتفخر الكلية بإنجازاتها المتعددة التي تعكس جهود أعضاء هيئة التدريس والطلاب والإداريين في سبيل تطوير العملية التعليمية
              وخدمة المجتمع.
            </p>
          </div>
        </div>
      <Footer/>
    </>)
}

export default Achievements
