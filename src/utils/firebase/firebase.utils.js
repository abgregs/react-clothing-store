import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDH8hZb6KBB50GydKqv6CmRTWQHJRdfKcw',
  authDomain: 'react-clothing-store-5f794.firebaseapp.com',
  projectId: 'react-clothing-store-5f794',
  storageBucket: 'react-clothing-store-5f794.appspot.com',
  messagingSenderId: '810241228804',
  appId: '1:810241228804:web:64c974a0ee8ee5d2e1f551',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  // if the doc doesn't exist, create the doc
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('Error creating the users', error);
    }
  // else just get the doc
  } else {
    return userDocRef;
  }
}
