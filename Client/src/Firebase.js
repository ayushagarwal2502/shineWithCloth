import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDfg6KtzURdm7coT-WyNPIDaF5lDuMeM8w",
  authDomain: "clothes-website-f278d.firebaseapp.com",
  projectId: "clothes-website-f278d",
  storageBucket: "clothes-website-f278d.appspot.com",
  messagingSenderId: "359647143324",
  appId: "1:359647143324:web:8eb0f283934e7360455459",
  measurementId: "G-47CTEQZW18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};