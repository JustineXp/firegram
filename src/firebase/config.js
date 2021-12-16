import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDDUaDAPurAd5W3o_x8rHYzjzBJGmeJ3HE",
    authDomain: "react-firegram-72020.firebaseapp.com",
    projectId: "react-firegram-72020",
    storageBucket: "react-firegram-72020.appspot.com",
    messagingSenderId: "186466769171",
    appId: "1:186466769171:web:f9652da0a9ce690e8862e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectStorage, projectFirestore, timestamp}
