
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAOD519HYi521CaD3TD1RqnKAUXI9XbRk8",
  authDomain: "naveen-backery.firebaseapp.com",
  projectId: "naveen-backery",
  storageBucket: "naveen-backery.appspot.com",
  messagingSenderId: "1022891805181",
  appId: "1:1022891805181:web:bcade6071a42a486993194"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)

  }

  export { firebase };