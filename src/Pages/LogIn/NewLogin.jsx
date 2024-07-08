import { useFirebase } from "../../auth/FirebaseContext.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NewLogin.css";

const NewLogin = () => {
  const { createUser, signInWithGoogle, signIn } = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const buttonName = e.nativeEvent.submitter.name; // Get the name of the clicked button

    try {
      if (buttonName === "signUp") {
        await createUser(email, password);
        navigate("/shop");
      } else if (buttonName === "signIn") {
        await signIn(email, password);
        navigate("/shop");
      }
      // Note: No need to handle signInWithGoogle here, as it has its own onClick handler
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/shop");
  };

  return (
    <div className="flex">
      {/*bg-[#3a3c19] bg-[#fceadb]*/}
      <div className="hidden md:flex flex-col justify-center pl-5 w-[50vw] bg-black text-white h-screen">
        <p className="italic-login text-2xl italic font-serif leading-[5rem]">
          Log in
        </p>
        <p className="medium-welcome text-[8vw] font-bold md:leading-[5rem] leading-[4rem]">
          WELCOME
        </p>
        <p className="medium-welcome text-[8vw] font-bold md:leading-[6rem] leading-[2rem]">
          BACK
        </p>
      </div>

      <div className="flex justify-center items-center md:w-[50vw] w-[100%] bg-slate-50 text-black h-screen relative">
        <form
          className="flex flex-col items-center h-4/5 "
          onSubmit={handleSubmit}
        >
          <h2 className="heading mb-8">Authentication</h2>
          <div className="input-container">
            <label className="label block text-xl font-bold mb-2">EMAIL</label>
            <input
              className="w-[75vw] md:w-96 h-12 mb-4 focus:border-blue-500 pl-2 bg-transparent border-solid rounded-[5px] border-black border-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="input-container">
            <label className="label block text-xl font-bold mb-2">
              PASSWORD
            </label>

            <input
              className="w-[75vw] md:w-96 h-12 mb-4 focus:border-blue-500 pl-2 bg-transparent border-solid rounded-[5px] border-black border-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="button-container flex items-center gap-5 mt-4">
            <button
              className="label text-white sign-up p-3 rounded-sm bg-stone-900"
              type="submit"
              name="signUp"
            >
              Sign Up
            </button>
            <span>OR</span>
            <button
              className="label sign-in p-3 rounded-sm bg-stone-900 text-white"
              type="submit"
              name="signIn"
            >
              Sign In
            </button>
          </div>

          <button
            className="label p-2 rounded-sm bg-stone-900 text-white mt-20 w-[75vw] md:w-96"
            onClick={handleGoogleSignIn}
            type="button"
            name="signInWithGoogle"
          >
            {/*<FaGoogle className="google-icon" />*/}
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewLogin;
