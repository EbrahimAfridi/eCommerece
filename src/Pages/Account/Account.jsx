import {useFirebase} from "../../auth/FirebaseContext.jsx";
import {useNavigate} from "react-router-dom";
import Navbar from "../../components/navbar.jsx";
import {User} from "phosphor-react";

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

    <div className="container absolute top-[20%] left-[35%]
    bg-black text-white w-[500px] h-[300px] p-10 rounded-xl"
    >

      <h1 className="text-[40px] flex justify-start items-center gap-3">
        <User size={40} color="#f1efef"  />
        Profile
      </h1>

      <div className="flex-col gap-10 justify-between items-end">

        {
          user.displayName && <p className="text-[20px] mt-4">Name: {user.displayName}</p>
        }

        <p className="text-[20px] mt-4">Email: {user.email}</p>

        <button
          onClick={handleLogOut}
          className="label ml-40 mt-8 sign-in p-3 rounded-sm bg-white text-black"
          type="submit"
          name="signIn"
        >
          Log out
        </button>

      </div>

    </div>
    </>
  );

};

export default Account;