
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnQi3OejmTfN8gsWuP5G1Ixp46AEWJbJA",
  authDomain: "miniblog-936d4.firebaseapp.com",
  projectId: "miniblog-936d4",
  storageBucket: "miniblog-936d4.appspot.com",
  messagingSenderId: "1088359419813",
  appId: "1:1088359419813:web:581ffd2c610994b8dbe24c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};

