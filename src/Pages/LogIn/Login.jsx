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
        navigate('/wishlist');
      } else if (buttonName === "signIn") {
        await signIn(email, password);
        navigate('/wishlist');
      }
      // Note: No need to handle signInWithGoogle here, as it has its own onClick handler
    } catch (e){
      setError(e.message);
      console.error(e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate('/wishlist');
  };

  return(
    <form onSubmit={handleSubmit} className="authentication-container">

      <h2>Authentication</h2>
      <div className="input-container">

        <input
          placeholder="Enter your Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type="email"
        />

      </div>
      <div className="input-container">

        <input
          placeholder="Enter your Passward"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          type="password"
        />

      </div>
      <div className="button-container">
        <button
          type="submit"
          name="signUp"
          className="sign-up">Sign Up</button>
        <button
          type="submit"
          name="signIn"
          className="sign-in">Sign In</button>
        <button
          onClick={handleGoogleSignIn}
          type="button"
          name="signInWithGoogle"
          className="google-sign-in">
          {/*<FaGoogle className="google-icon" />*/}
          Sign In with Google
        </button>
      </div>

    </form>
  )

}