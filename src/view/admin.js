import { useState, useEffect } from 'react';
import './App.css';
import Headeradmin from '../components/header-admin';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import RegistorUser from '../components/RegistorUser';
import UploadForm from '../components/UploadForm';
import { authUser } from '../firebase/config';
import Footer from '../components/footer';


function Admin(props) {
  const [selectedImg, setSelectedImg] = useState(null);

  const [user, setUser] = useState([]);

  const authListener = () => {
    authUser.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }

  useEffect(() => {
    authListener();
  })

  return ( 
    <>
      {user ?
        (<>
          <Headeradmin/>
          <div className='container text-center' style={{ paddingTop: 15}}>
              <UploadForm/>
              <ImageGrid setSelectedImg={setSelectedImg}/>
            {/* <ImageGrid setSelectedImg={setSelectedImg} /> */}
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
          </div>

          <Footer />
        </>)
        : (<RegistorUser />)}
    </>
  );

}

export default Admin;




