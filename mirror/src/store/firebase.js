import firebase from "firebase";

//console.log(process.env.REACT_APP_FIREBASE_KEY);

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gym-project-2066d.firebaseapp.com",
  databaseURL: "https://gym-project-2066d.firebaseio.com",
  projectId: "gym-project-2066d",
  storageBucket: "gym-project-2066d.appspot.com",
  messagingSenderId: "894183539239",
  appId: "1:894183539239:web:ad59080a46bb0356590402",
  measurementId: "G-3267WK7S89",
};

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
firebase.analytics();

export default firebase;
