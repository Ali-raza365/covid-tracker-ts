import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBaZ4w5XLq2s6UQD7aH7ES4-kVPpvs_AFs",
  authDomain: "notification-app-d4583.firebaseapp.com",
  projectId: "notification-app-d4583",
  storageBucket: "notification-app-d4583.appspot.com",
  messagingSenderId: "981759543631",
  appId: "1:981759543631:web:e7f810f87ac4bb12ee1d3a"
};

firebase.initializeApp(firebaseConfig)
export default firebase;