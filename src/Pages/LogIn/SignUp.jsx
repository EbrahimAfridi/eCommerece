import {useState} from "react";
import {useFirebase} from "../../auth/FirebaseContext.jsx";
import {useNavigate} from "react-router-dom";

export const SignUp = () => {

  const {createUser} = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate('/wishlist');
    } catch (e){
      setError(e.message);
      console.error(e.message);
    }
  }

  return(

    <form onSubmit={handleSubmit}>

      <h1>Sign up</h1>

      <label>Email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>

      <label>Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>

      <button>Sign Up</button>

    </form>

  )
}