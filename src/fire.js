/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcwLiPXS0Pdjcd8M4szI4h68Iv_l-EOKo",
  authDomain: "tracky-bef8a.firebaseapp.com",
  databaseURL: "https://tracky-bef8a.firebaseio.com",
  projectId: "tracky-bef8a",
  storageBucket: "tracky-bef8a.appspot.com",
  messagingSenderId: "852008204807",
  appId: "1:852008204807:web:dfed1759604dd092b5c8a2",
  measurementId: "G-JD290VVNHZ",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
