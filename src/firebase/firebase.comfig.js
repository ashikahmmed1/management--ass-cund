import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnuMbqwc0EhLAdnaHGmkLAYejaMsKjmIE",
  authDomain: "management-department-4f44d.firebaseapp.com",
  projectId: "management-department-4f44d",
  storageBucket: "management-department-4f44d.firebasestorage.app",
  messagingSenderId: "879176128696",
  appId: "1:879176128696:web:bad9d9eea59dfb95defc4d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
