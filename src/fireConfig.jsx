import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwokjLWcdnMgNDssQXLGyqjPwxdv5WEI8",
  authDomain: "gallery-79111.firebaseapp.com",
  projectId: "gallery-79111",
  storageBucket: "gallery-79111.appspot.com",
  messagingSenderId: "54481062391",
  appId: "1:54481062391:web:d62a67e707386f2fa986f2",
  measurementId: "G-TY3PEFY0VB",
};

const app = initializeApp(firebaseConfig);

export { app };
