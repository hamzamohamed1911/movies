import { getAuth } from "firebase/auth";

import { initializeApp   } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDGBYI5W-NeYWMT7POSLWNCOR8RKQRIQmA",
  authDomain: "movies-6352f.firebaseapp.com",
  projectId: "movies-6352f",
  storageBucket: "movies-6352f.appspot.com",
  messagingSenderId: "417646771034",
  appId: "1:417646771034:web:0d8c43588927d199029163",
  measurementId: "G-XT9VPJHT42"
};



const app = initializeApp(firebaseConfig);
export const Auth =getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

export default app;