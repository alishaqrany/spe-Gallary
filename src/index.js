import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import "../node_modules/video-react/dist/video-react.css";
import './index.css';
import './style.css'


import Admin from './view/admin';
import Nat from './view/nat';
import App from './view/App';
import Art from './view/art';
import Ath from './view/ath';
import Hand from './view/hand';
import Flashback from './view/fb';
import Panorama from './view/pano';
import HlifeBefore from './view/hlifeBefore';
import HlifeBet from './view/hlifeBet';
import HlifeAfter from './view/hlifeAfter';
import Gallery from './view/gallery'
import About from './view/about';
import Contact from './view/contact'
// import Ali from './test/ali'
// import Test from './test/test'
import Test1 from './test/test1'
import Goals from './view/goals';
import News from './view/news';
import Achievements from './view/achievements';
import Quality from './view/quality';
import Alliance from './view/alliance';
import GreenLeadership from './view/green-leadership';
import Innovation from './view/innovation';
import Museum from './view/museum';


function App1(){
return(
<BrowserRouter dir="rtl" >  
<Routes>
    <Route path="/" exact element={<App />} />
    <Route path="admin" element={<Admin />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="art" element={<Art/>} />
    <Route path="nat" element={<Nat />} />
    <Route path="pano" element={<Panorama />} />    
    <Route path="fb" element={<Flashback />} />
    <Route path="hlifeBefore" element={<HlifeBefore />} />
    <Route path="hlifeBet" element={<HlifeBet />} />
    <Route path="hlifeAfter" element={<HlifeAfter />} />
    <Route path="contact-us" element={<Contact />} />
    <Route path="about-us" element={<About />} />
    <Route path="goals" element={<Goals />} />
    <Route path="news" element={<News />} />
    {/* <Route path="ali" element={<Ali />} />
    <Route path="test" element={<Test />} /> */}
    <Route path="test1" element={<Test1 />} />
    <Route path="ath" element={<Ath />} />
    <Route path="hand" element={<Hand />} />
    <Route path="achievements" element={<Achievements />} />
    <Route path="quality" element={<Quality />} />
    <Route path="alliance" element={<Alliance />} />
    <Route path="green-leadership" element={<GreenLeadership />} />
    <Route path="innovation" element={<Innovation />} />
    <Route path="museum" element={<Museum />} />


</Routes>
  
</BrowserRouter>
  // ,document.getElementById('root')
);
}
const roote= document.getElementById("root");
ReactDOM.render(<App1 />, roote);