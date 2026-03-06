import { useState,} from 'react';
import Header from '../components/Header';
import ImageGridtest1 from '../components/ImageGrid-test1';
import Modal from '../components/Modal-test1';
import Footer from '../components/footer';


function Test1(props) {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
        (<>            
        <Header />

          <div className='container text-center modal1' style={{ paddingTop: 15}}>
              <h1>
                test1
               </h1>
          </div>
            <ImageGridtest1 setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            <Footer />
        </>)        
  );
}

export default Test1;