import {createContext, useContext, useEffect, useState} from "react";
import {initializeApp} from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, set, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
};


const FirebaseContext = createContext(null);

const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const GoogleProvider = new GoogleAuthProvider();
const FirebaseDatabase = getDatabase(FirebaseApp);

// Component
export const FirebaseContextProvider = ({children}) => {

  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  // Create user
  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(FirebaseAuth, email, password);
  }

  // To sign in with email
  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(FirebaseAuth, email, password);
  }

  // To POST user information
  const putData = async (key, data) => {
    await set(ref(FirebaseDatabase, key), data);
  }

  // To sign in with Google
  const signInWithGoogle = async () => {
    await signInWithPopup(FirebaseAuth, GoogleProvider);
  };

  // To log-out user
  const logout = async () => {
    await signOut(FirebaseAuth);
  }


  return (
    //this FirebaseContext is not file or component name it is createContext one
    <FirebaseContext.Provider value={
        {
          createUser,
          putData,
          signIn,
          signInWithGoogle,
          FirebaseAuth,
          user,
          logout,
        }
      }
    >
      {children}
    </FirebaseContext.Provider>
  )
};

// Costume hook useFirebase
export const useFirebase = () => {
  return useContext(FirebaseContext);
}
