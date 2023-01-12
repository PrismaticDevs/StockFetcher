import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKKc5cQowgSA6aLjGxCXiohu2DasWo_eU",
  authDomain: "financefetcher.firebaseapp.com",
  databaseURL: "https://financefetcher-default-rtdb.firebaseio.com",
  projectId: "financefetcher",
  storageBucket: "financefetcher.appspot.com",
  messagingSenderId: "1062202068180",
  appId: "1:1062202068180:web:a6fcba87c9b79a15b8bf41",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
