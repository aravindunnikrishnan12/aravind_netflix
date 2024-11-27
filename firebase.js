import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDa1rqRa3xnBHmVQw7maUy0oymJsesE0bw",
  authDomain: "first-54166.firebaseapp.com",
  projectId: "first-54166",
  storageBucket: "first-54166.appspot.com",
  messagingSenderId: "285142043892",
  appId: "1:285142043892:web:2142e2fec628aaf55ca2a1",
  measurementId: "G-8JMSVHNTY7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('_').join(' '))
  }
};

const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('_').join(' '))
    }
  };
  

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
