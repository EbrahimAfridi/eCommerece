import {useFirebase} from "../../auth/FirebaseContext.jsx";
import {useNavigate} from "react-router-dom";
import Navbar from "../../components/navbar.jsx";
import {User} from "phosphor-react";
import "./Account.css";

const Account = () => {

  const {user, logout} = useFirebase();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.error(e.message);
    }
  }

  return(
    <>

      <Navbar/>
    <div className="account-container">
      <div className="account">
        <div className="account-nav">
          <h1 className="profile" >
            <User size={40} color="#f1efef"  />
            Profile
          </h1>

          {/* <div>

            {
              user.displayName && <p className="name">Name: {user.displayName}</p>
            }
          </div> */}
          <div>
            <p className="email">Email: {user.email}</p>
          </div>
          
        </div>
        <div className="center-content">
          <div className="your-cart">
            <h3>Your Cart..</h3>
          </div>

        </div>
        <div className="button-div">
          <button
              onClick={handleLogOut}
              className="button-80"
              type="submit"
              name="signIn"
            >
              Log out
          </button>
        </div>
          

        

      </div>
    </div>
    </>
  );

};

export default Account;