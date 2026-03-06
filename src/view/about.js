import Header from '../components/Header';
import Footer from '../components/footer';
import Abou from '../components/about'
function About(props) {
  return (
        (<>
          <Header />
          <div className='container text-center' style={{ paddingTop: 15}}>
          <div className='container'>
              <h1>
              اعداد د/ إيمان الشريف و طلاب الفرقة الثانية تكنولوجيا التعليم
              <br/>2021-2022 
              </h1>
            </div>


          
            <Abou/>


          </div>
          <Footer />
        </>)
        
  );
}

export default About;