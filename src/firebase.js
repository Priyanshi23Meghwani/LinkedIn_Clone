import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9Om1pD4hbAk6cn2A0iy-6F4zfimbIFDA",
    authDomain: "linkedin-clone-a28a4.firebaseapp.com",
    projectId: "linkedin-clone-a28a4",
    storageBucket: "linkedin-clone-a28a4.appspot.com",
    messagingSenderId: "964267938195",
    appId: "1:964267938195:web:a624a12b1cbf9ec4531866",
    measurementId: "G-D8H8GFGH2E"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider , storage };
export default db;