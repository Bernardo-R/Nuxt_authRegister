import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



export default defineNuxtPlugin((nuxtApp) =>{
    const firebaseConfig = {
        apiKey: "AIzaSyAa0xpeKuy58IG72ogDVSetFIKwYTXqijc",
        authDomain: "users-68bd5.firebaseapp.com",
        projectId: "users-68bd5",
        storageBucket: "users-68bd5.appspot.com",
        messagingSenderId: "860252106812",
        appId: "1:860252106812:web:81b2aaa868201121fd5339",
        measurementId: "G-ZHLYMH6MT3"
      };
      // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

  //to show in console
  console.log("Firebase initialized");

  //*********to be able to export const to external files ***********
  const auth = getAuth(app)

  return {
    provide: {
        auth
    }
  }
  //************************************************************ */
})