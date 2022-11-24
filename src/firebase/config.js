import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAribZUuKS6nakMqc7SFajm_YCbRSTqcrU",
  authDomain: "miniblog-f6678.firebaseapp.com",
  projectId: "miniblog-f6678",
  storageBucket: "miniblog-f6678.appspot.com",
  messagingSenderId: "209098687390",
  appId: "1:209098687390:web:a680afe727b821cddc0c8f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};

