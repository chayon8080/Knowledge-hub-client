// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyDbmZt_9eIwYvHJmH2mU849CAhxT8JA2uo",
    authDomain: "knowledge-hub-f3894.firebaseapp.com",
    projectId: "knowledge-hub-f3894",
    storageBucket: "knowledge-hub-f3894.appspot.com",
    messagingSenderId: "342177719732",
    appId: "1:342177719732:web:737c00914ac00a10b83ee1"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;