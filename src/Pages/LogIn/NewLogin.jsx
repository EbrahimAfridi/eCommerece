import { useFirebase } from "../../auth/FirebaseContext.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NewLogin.css";
import { GoogleLogo } from "phosphor-react";

const NewLogin = () => {
  const { createUser, signInWithGoogle, signIn } = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className="hidden md:flex flex-col items-start justify-center pl-5 w-[50vw] bg-black text-white h-screen">
        <p className="italic-login text-md lg:text-2xl italic font-serif mb-4">
          Log in
        </p>
        <div>
          <p className="medium-welcome text-7xl lg:text-9xl font-bold">
            WELCOME
          </p>
          <p className="medium-welcome text-7xl lg:text-9xl font-bold -mt-2 lg:-mt-4">
            BACK
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center md:w-[50vw] w-full bg-slate-50 text-black h-screen relative">
        <form
          className="flex flex-col items-center h-4/5 "
          onSubmit={handleSubmit}
        >
          <h2 className="font-semibold mb-16 font-sans text-3xl lg:text-5xl tracking-wide">
            Authentication
          </h2>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <div className="input-container">
            <label className="block text-md lg:text-lg font-medium mb-2">
              EMAIL
            </label>
            <input
              className="w-[75vw] md:w-96 h-12 mb-6 focus:border-blue-600 pl-2 rounded-lg border border-zinc-300 shadow-sm focus:outline-none text-zinc-400 text-md font-light"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <div className="input-container">
            <label className="block text-md lg:text-lg font-medium mb-2">
              PASSWORD
            </label>

            <input
              className="w-[75vw] md:w-96 h-12 mb-10 focus:border-blue-600 pl-2 rounded-lg border border-zinc-300 shadow-sm focus:outline-none text-zinc-400 text-md font-light"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>
          <div className="button-container flex items-center gap-5 mt-4 w-full">
            <button
              className="hover:bg-opacity-90 sign-in p-3 bg-stone-900 text-white w-full rounded-lg border shadow-sm font-extralight"
              type="submit"
              name="signIn"
            >
              Sign In
            </button>
            <span>OR</span>
            <button
              className="hover:bg-opacity-90 sign-in p-3 bg-stone-900 text-white w-full rounded-lg border shadow-sm font-extralight"
              type="submit"
              name="signUp"
            >
              Sign Up
            </button>
          </div>
          <p className="text-zinc-500 mt-6 mb-8">
            New to SneakEarth? Sign up.
          </p>
          <button
            className="hover:shadow-md sign-in p-3 bg-white text-black w-full rounded-lg border shadow-sm font-extralight mt-4"
            onClick={handleGoogleSignIn}
            type="button"
            name="signInWithGoogle"
          >
            <div className="flex items-center justify-center">
              Sign In with
              <GoogleLogo className="ml-2" size={20} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewLogin;
