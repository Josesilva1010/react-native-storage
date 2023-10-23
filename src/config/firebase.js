
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAkTFl7gXHr_k1kzmytlanRc6EfWtQqfco",
  authDomain: "projetoifal513.firebaseapp.com",
  projectId: "projetoifal513",
  storageBucket: "projetoifal513.appspot.com",
  messagingSenderId: "410076117785",
  appId: "1:410076117785:web:d480727ea353a074572388",
  measurementId: "G-7XWCFLBE7M"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage }
