import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbzk58g2-9Sb4XzFvfFsUgY2cxx2FaKjc",
    authDomain: "aclone-287ce.firebaseapp.com",
    projectId: "aclone-287ce",
    storageBucket: "aclone-287ce.appspot.com",
    messagingSenderId: "816754588957",
    appId: "1:816754588957:web:b436e7276684477616f5f4",
    measurementId: "G-935PJRJ5N4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };