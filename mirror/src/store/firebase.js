import firebase from "firebase";
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gym-project-2066d.firebaseapp.com",
  databaseURL: "https://gym-project-2066d.firebaseio.com",
  projectId: "gym-project-2066d",
  storageBucket: "gym-project-2066d.appspot.com",
  messagingSenderId: "894183539239",
  appId: "1:894183539239:web:ad59080a46bb0356590402",
  measurementId: "G-3267WK7S89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
//const db = firebase.firestore();

// db.collection("measurements")
// .get()
// .then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//     //console.log(`${doc.id} => ${doc.data().date}`);
//     if (checkWithinMonth(today, doc.data().date)) {
//       var newElement = [doc.data().date, doc.data().value];
//       newList.push(newElement);
//       //setHistory(history => [...history, newElement]);
//       console.log("added element to state");
//     }
//     //console.log(`${doc.id} => ${doc.data().value}`);
//   });

//const db = firebase.firestore();

// const measurementsRef = db.collection("measurements").add({
//     date: dateInput,
//     value: valueInput
//   });
