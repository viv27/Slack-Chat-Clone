import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCKRtgnMfGxwSYX5nx51A41WLDOfqHHz0Q",
    authDomain: "slack-clone-eac09.firebaseapp.com",
    projectId: "slack-clone-eac09",
    storageBucket: "slack-clone-eac09.appspot.com",
    messagingSenderId: "982194125953",
    appId: "1:982194125953:web:5d479fa49c5826ceae2180"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;