// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoO8b9JnIF2YmKS6le7RLi5Aao77O64d0",
  authDomain: "netflix-clone-2-b4f87.firebaseapp.com",
  projectId: "netflix-clone-2-b4f87",
  storageBucket: "netflix-clone-2-b4f87.appspot.com",
  messagingSenderId: "805896515319",
  appId: "1:805896515319:web:86964235a18fc43e07adf2",
  measurementId: "G-PR3TJCV2VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);