// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBIY-vIHFp5zOSYURxpcb-QZnJKTiu5Vvw",
//   authDomain: "doctors-portal-121.firebaseapp.com",
//   projectId: "doctors-portal-121",
//   storageBucket: "doctors-portal-121.appspot.com",
//   messagingSenderId: "49103798907",
//   appId: "1:49103798907:web:2a167488434f26447358de"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,                                                              //process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;