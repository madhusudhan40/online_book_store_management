// Import the functions you need from the SDKs you need

import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzhMHDAXV8KLxd4Bmfge_0Rth-SgvVnVs",
  authDomain: "online-book-store-manage-7bebd.firebaseapp.com",
  projectId: "online-book-store-manage-7bebd",
  storageBucket: "online-book-store-manage-7bebd.appspot.com",
  messagingSenderId: "275642508217",
  appId: "1:275642508217:web:be4b22e209864d84ab0c68",
  measurementId: "G-S4BM0RFSFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); // Create an instance of the authentication service

export { auth }; 
export {app}
