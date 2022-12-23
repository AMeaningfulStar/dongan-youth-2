import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWk3E4jhpgB22dyWo89Yxb8Pf-9qgZifk",
  authDomain: "dongan-youth2.firebaseapp.com",
  projectId: "dongan-youth2",
  storageBucket: "dongan-youth2.appspot.com",
  messagingSenderId: "858907284115",
  appId: "1:858907284115:web:882a45b2b668b144663366",
  measurementId: "G-JPZNLFP1YS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app , auth };