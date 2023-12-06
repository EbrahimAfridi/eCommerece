import {useState} from "react";
import {useFirebase} from "../../auth/FirebaseContext.jsx";
import {useNavigate} from "react-router-dom";

export const SignIn = () => {

  const navigate = useNavigate();
  const {signIn} = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate('/wishlist');
    } catch (e){
      setError(e.message);
      console.error(e.message);
    }
  }


  return(

    <form onSubmit={handleSubmit}>

      <h1>Sign In</h1>

      <label>Email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>

      <label>Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>

      <button>Sign In</button>

    </form>

  )
}