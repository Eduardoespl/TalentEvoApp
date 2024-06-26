import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5XI2r6TBFYPxf7p_OpvytkL6ns8bKg_s',
  authDomain: 'talentevopc.firebaseapp.com',
  projectId: 'talentevopc',
  storageBucket: 'talentevopc.appspot.com',
  messagingSenderId: '424503598820',
  appId: '1:424503598820:web:b94e2241695be0b66796f1',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
