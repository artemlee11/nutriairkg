import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDy1A7H_ICjT0sbaGpYUAauwdVhQzNRTKw",
  authDomain: "nutriair-e14ce.firebaseapp.com",
  databaseURL: "https://nutriair-e14ce-default-rtdb.firebaseio.com",
  projectId: "nutriair-e14ce",
  storageBucket: "nutriair-e14ce.appspot.com",
  messagingSenderId: "641307880741",
  appId: "1:641307880741:web:b1ad2730ae20419373becc",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const db = getFirestore(app);

export const auth = getAuth(app);

export { storage, app };
