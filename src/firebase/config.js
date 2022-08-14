import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBvwDKQRbyxkDfL3HHA0sZ6UAafMH_gsLk",
    authDomain: "vue-blog-system-6f1bc.firebaseapp.com",
    projectId: "vue-blog-system-6f1bc",
    storageBucket: "vue-blog-system-6f1bc.appspot.com",
    messagingSenderId: "787347195861",
    appId: "1:787347195861:web:2a36ebb431415596e45f5c"
  };

  firebase.initializeApp(firebaseConfig);
  let db= firebase.Firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp}