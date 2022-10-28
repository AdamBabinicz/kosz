import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4azADDnXv2dPwOwixI1U2CI2rjnIuxtA",
  authDomain: "react-natanek.firebaseapp.com",
  projectId: "react-natanek",
  storageBucket: "react-natanek.appspot.com",
  messagingSenderId: "515845911674",
  appId: "1:515845911674:web:e0677101283a7a9665b7c3",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
