import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
  authDomain: 'ecommerce-3f0ea.firebaseapp.com',
  projectId: 'ecommerce-3f0ea',
  storageBucket: 'ecommerce-3f0ea.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
export const auth = getAuth(app);
