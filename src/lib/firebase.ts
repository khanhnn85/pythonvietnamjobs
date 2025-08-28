import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  projectId: "vn-jobs-hub",
  appId: "1:33761917473:web:9b03c741fb84dc6e944160",
  storageBucket: "vn-jobs-hub.appspot.com",
  apiKey: "AIzaSyDXXSr0f3au2kd5EykOhVGvd8AOn3de1w4",
  authDomain: "vn-jobs-hub.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "33761917473"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
