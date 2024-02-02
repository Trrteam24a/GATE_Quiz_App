

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTFYJtxadKvUPf7C_LcgGMq9jzShsXUcI",
  authDomain: "vue3-login-70c46.firebaseapp.com",
  projectId: "vue3-login-70c46",
  storageBucket: "vue3-login-70c46.appspot.com",
  messagingSenderId: "831532488609",
  appId: "1:831532488609:web:6b3b57b65680f3d9861de0",
  measurementId: "G-C76DPY050E"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const app = createApp(App)

app.use(router)

app.mount('#app')
