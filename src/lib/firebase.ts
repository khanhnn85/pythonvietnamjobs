import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: "vn-jobs-hub",
  appId: "1:33761917473:web:9b03c741fb84dc6e944160",
  storageBucket: "vn-jobs-hub.firebasestorage.app",
  apiKey: "AIzaSyDXXSr0f3au2kd5EykOhVGvd8AOn3de1w4",
  authDomain: "vn-jobs-hub.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "33761917473"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
