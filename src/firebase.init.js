// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh4AmtcBQJ1R_iwjTWovZs1wu-FviaASk",
  authDomain: "hyde-furniture.firebaseapp.com",
  projectId: "hyde-furniture",
  storageBucket: "hyde-furniture.appspot.com",
  messagingSenderId: "551483354824",
  appId: "1:551483354824:web:3bcf50e4808bf183b4bffd",
  measurementId: "G-D99HPTGT1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);

export default auth;