import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOD519HYi521CaD3TD1RqnKAUXI9XbRk8",
  authDomain: "naveen-backery.firebaseapp.com",
  projectId: "naveen-backery",
  storageBucket: "naveen-backery.appspot.com",
  messagingSenderId: "1022891805181",
  appId: "1:1022891805181:web:bcade6071a42a486993194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
