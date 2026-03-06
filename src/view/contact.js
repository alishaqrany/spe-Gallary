import Header from '../components/Header';
import Footer from '../components/footer';
import Cont from '../components/contact'

function Contact(props) {
  return (
        (<>
          <Header />
          <div className='container text-center box'  style={{ paddingTop: 15}}>
          <div className='container blure1'>
              <h1 >
                تواصل معنا
              </h1>
            </div>

            <Cont/>

          </div>

          <Footer />
        </>)
        
  );
}

export default Contact;