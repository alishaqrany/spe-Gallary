import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer';

const Museum = () => {
    return (<>
      <Header/>
        <div className='container text-center' style={{ paddingTop: 30 }}>
          <h1 className='text-white1'>المتحف المصري الكبير</h1>
          <div className='infback' style={{ padding: 30, marginTop: 20 }}>
            <p className='widget20'>
              يقدم هذا القسم توثيقاً مصوراً للمتحف المصري الكبير، أحد أعظم المشاريع الثقافية في مصر والعالم،
              والذي يضم مجموعة فريدة من الآثار المصرية القديمة التي تحكي قصة الحضارة المصرية العريقة
              عبر آلاف السنين.
            </p>
          </div>
        </div>
      <Footer/>
    </>)
}

export default Museum
