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
import {useNavigate} from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDpdffq5wyIPP6QfIus3Howy8KJKXz_vWE",
  authDomain: "fir-testing-4217e.firebaseapp.com",
  projectId: "fir-testing-4217e",
  storageBucket: "fir-testing-4217e.appspot.com",
  messagingSenderId: "196842497349",
  appId: "1:196842497349:web:bd218af231c8969ee14a2c",
  databaseURL: "https://fir-testing-4217e-default-rtdb.firebaseio.com",
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
