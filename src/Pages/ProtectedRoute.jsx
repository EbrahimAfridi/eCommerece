import {Navigate} from "react-router-dom";
import {useFirebase} from "../auth/FirebaseContext.jsx";

const ProtectedRoute = ({children}) => {

  // current user
  const {user} = useFirebase();

  // if no user found then navigate to home page i.e. log in
  if (!user){
    return <Navigate to="/" />
  }

  return children;

}

export default ProtectedRoute;