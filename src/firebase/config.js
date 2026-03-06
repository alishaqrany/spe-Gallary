import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


///////////////////////////1
/*  const firebaseConfig = {
  apiKey: "AIzaSyDNDblLqC8WryqSgOKqdKEWOoqNTqYmiLE",
  authDomain: "reactgallery-2021.firebaseapp.com",
  projectId: "reactgallery-2021",
  storageBucket: "reactgallery-2021.appspot.com",
  messagingSenderId: "551544400757",
  appId: "1:551544400757:web:b68225b24146e81e73c13c",
  measurementId: "G-W6J42LFJ1N"
};
 */
/////////////////////////////////2
/* const firebaseConfig = {
  apiKey: "AIzaSyDiPJXAPcIpHitBr5196xOlEc73RTeFk9o",
  authDomain: "light-tale.firebaseapp.com",
  projectId: "light-tale",
  storageBucket: "light-tale.appspot.com",
  messagingSenderId: "968716755626",
  appId: "1:968716755626:web:e0d0b270c5e770395566d3",
  measurementId: "G-GB30SSCBSR"
};
 */
////////////////////////////////////----back3

/*  const firebaseConfig = {
  apiKey: "AIzaSyBXRTU5xKrZRIiQzyYFAU_TOLaESsYeSxE",
  authDomain: "reactg2-a1f44.firebaseapp.com",
  projectId: "reactg2-a1f44",
  storageBucket: "reactg2-a1f44.appspot.com",
  messagingSenderId: "713892968832",
  appId: "1:713892968832:web:11f9fddffe88f9463de965",
  measurementId: "G-DCKH9GPB2X"
};
 */


/////////////////////////-----back4
 
const firebaseConfig = {
  apiKey: "AIzaSyAkgL5p5UtaondFKlEC7pDicdgOqcosqEs",
  authDomain: "back4-8e656.firebaseapp.com",
  projectId: "back4-8e656",
  storageBucket: "back4-8e656.appspot.com",
  messagingSenderId: "524124154842",
  appId: "1:524124154842:web:42a2238292c0e0ff286ee3",
  measurementId: "G-F3REXCRFGN"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const authUser = firebase.auth();

export { projectStorage, projectFirestore, timestamp, authUser};