import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6cQ99-7XcvLNohDKcPcliILhVh4lz_v4",
  authDomain: "junak-cb247.firebaseapp.com",
  projectId: "junak-cb247",
  storageBucket: "junak-cb247.firebasestorage.app",
  messagingSenderId: "891635370089",
  appId: "1:891635370089:web:7f4a523dfbeaa4fbd0baf8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
