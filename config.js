import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA-Yzipbmp0P9tTItHLKpO2c1qQ0ylb9LU",
    authDomain: "bibliotecaeletronica-40d8a.firebaseapp.com",
    projectId: "bibliotecaeletronica-40d8a",
    storageBucket: "bibliotecaeletronica-40d8a.appspot.com",
    messagingSenderId: "670226746814",
    appId: "1:670226746814:web:78a3fea6e0a036a1d13def"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();