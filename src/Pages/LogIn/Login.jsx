import {useState} from "react";
import {useFirebase} from "../../auth/FirebaseContext.jsx";
import {useNavigate} from "react-router-dom";
import "./Login.css";

export const Login = () => {

  const {createUser, signInWithGoogle, signIn} = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // old code for handleSubmit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await createUser(email, password);
  //     navigate('/wishlist');
  //   } catch (e){
  //     setError(e.message);
  //     console.error(e.message);
  //   }
  // }

  // new code fo handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const buttonName = e.nativeEvent.submitter.name;  // Get the name of the clicked button

    try {
      if (buttonName === "signUp") {
        await createUser(email, password);
        navigate('/shop');
      } else if (buttonName === "signIn") {
        await signIn(email, password);
        navigate('/shop');
      }
      // Note: No need to handle signInWithGoogle here, as it has its own onClick handler
    } catch (e){
      setError(e.message);
      console.error(e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate('/shop');
  };

  return(
    <form onSubmit={handleSubmit}
          className="authentication-container absolute top-[30%] left-[40%] p-10"
    >

      <h2 className="text-4xl mb-10">Authentication</h2>
      <div className="input-container">

        <input
          className="rounded-lg pl-3 h-8"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type="email"
        />

      </div>
      <div className="input-container">

        <input
          className="rounded-lg pl-3 h-8"
          placeholder="Passward"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          type="password"
        />

      </div>
      <div className="button-container">
        <button
          className="sign-up bg-slate-800"
          type='submit'
          name="signUp"
        >
          Sign Up
        </button>
        <button
          style={{ backgroundColor: '#28a745', color: '#fff' }}
          className="sign-in"
          type="submit"
          name="signIn"
        >
          Sign In
        </button>
        <button
          style={{ backgroundColor: '#1e212a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={handleGoogleSignIn}
          type="button"
          name="signInWithGoogle"
          className="google-sign-in"
        >
          {/*<FaGoogle className="google-icon" />*/}
          Sign In with Google
        </button>
      </div>

    </form>
  )

}