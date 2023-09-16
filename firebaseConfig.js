import firebase ,{ initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { getApps } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIqgcAxuSqL7AXkUFmj4FsNdoV5wKhk-M",
    authDomain: "hydrowatt-274dc.firebaseapp.com",
    projectId: "hydrowatt-274dc",
    storageBucket: "hydrowatt-274dc.appspot.com",
    messagingSenderId: "34060938235",
    appId: "1:34060938235:web:2a20880b388c28af2a395e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
 

  const database = getDatabase(app);
const FirebaseRef1 = ref(database, 'Consumption');
const FirebaseRef2 = ref(database, 'Incoming Water');
const FirebaseRef3 = ref(database, 'wat_rlay1');
const FirebaseRef4 = ref(database, 'wat_rlay2');

export {
  db,
  auth,
  FirebaseRef1,
  FirebaseRef2,
  FirebaseRef3,
  FirebaseRef4
}
