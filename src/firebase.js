import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbYmZ6toVObjnjl0fj8Ip_t92ipPGsuco",
  authDomain: "clone-db646.firebaseapp.com",
  projectId: "clone-db646",
  storageBucket: "clone-db646.appspot.com",
  messagingSenderId: "285339763431",
  appId: "1:285339763431:web:ce8e28ce7a8894b3541842",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
