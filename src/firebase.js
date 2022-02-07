import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMh5klppwEDerY1tH7IDi5ZufTT7tTyjU",
  authDomain: "flutter-firebase-auth-te-b1393.firebaseapp.com",
  databaseURL: "https://flutter-firebase-auth-te-b1393.firebaseio.com",
  projectId: "flutter-firebase-auth-te-b1393",
  storageBucket: "flutter-firebase-auth-te-b1393.appspot.com",
  messagingSenderId: "518216424326",
  appId: "1:518216424326:web:55cebfa0d01178859baa07",
  measurementId: "G-62XWRL70TF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
