import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC7pwFk7ViQQUDGUsCn8YTkXmjAJ6gLaFw",
  authDomain: "billing-app-2e701.firebaseapp.com",
  projectId: "billing-app-2e701",
  storageBucket: "billing-app-2e701.appspot.com",
  messagingSenderId: "335118394575",
  appId: "1:335118394575:web:c222a347c8d990985683ba",
  measurementId: "G-X906B0QWKC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
console.log(firebase);


export default database;