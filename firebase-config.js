import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native'
// import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDr27dLjec3h6AZ_uyfhRXzAmZmEyh7MGA",
    authDomain: "lets-beano.firebaseapp.com",
    databaseURL: "https://lets-beano-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lets-beano",
    storageBucket: "lets-beano.appspot.com",
    messagingSenderId: "726334210249",
    appId: "1:726334210249:web:71f8f9d4a01090937c0d18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export { db, auth, app, addDoc }