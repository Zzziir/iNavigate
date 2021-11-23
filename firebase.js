import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJiIk7WLIfh5P8ZPiwCx7bIFsRkIsjyCk",
    authDomain: "inavigate-e4d24.firebaseapp.com",
    projectId: "inavigate-e4d24",
    storageBucket: "inavigate-e4d24.appspot.com",
    messagingSenderId: "476404889588",
    appId: "1:476404889588:web:3aa9b4fa2ed1647351eba1"
};

let app;

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    firebase.app();
}

const auth = firebase.auth();

export { auth };