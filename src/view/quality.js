import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';

const Quality = () => {
    return (<>
      <Header/>
        <div className='container text-center' style={{ paddingTop: 30 }}>
          <h1 className='text-white1'>مستحدثات الجودة بالكلية</h1>
          <div className='infback' style={{ padding: 30, marginTop: 20 }}>
            <p className='widget20'>
              تحرص الكلية على تطبيق أحدث معايير الجودة والاعتماد الأكاديمي، وتعمل على تطوير منظومة الجودة الشاملة
              بما يتوافق مع المعايير المحلية والدولية لضمان جودة التعليم والبحث العلمي وخدمة المجتمع.
            </p>
          </div>
        </div>
      <Footer/>
    </>)
}

export default Quality
