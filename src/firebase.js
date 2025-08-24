import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLlZ7TJOge2QBu0E9qTZ2zRauG0xK6fqw",
  authDomain: "smart-air-monitor-cd411.firebaseapp.com",
  projectId: "smart-air-monitor-cd411",
  storageBucket: "smart-air-monitor-cd411.firebasestorage.app",
  messagingSenderId: "873004024141",
  appId: "1:873004024141:web:81c675c108578728777704",
  measurementId: "G-9YPRHQFZ1T",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
