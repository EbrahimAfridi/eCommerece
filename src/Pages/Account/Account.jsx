import { useFirebase } from "../../auth/FirebaseContext.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar.jsx";
import { User } from "phosphor-react";

const Account = () => {
  const { user, logout } = useFirebase();
  console.log(user);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <section className="flex flex-col items-center w-full h-screen">
      <Navbar />
      <div className="mt-40 w-full flex justify-center">
        <div className="container shadow-lg bg-white text-zinc-900 p-8 w-96 rounded-md font-sans">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={user.photoURL ? user.photoURL : "/vite.svg"}
                alt="profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-semibold">
              {user.displayName ? user.displayName : "test-user"}
            </p>
            <p className="text-lg">{user.email ? user.email : "example@email.com"}</p>
            <button
              onClick={handleLogOut}
              className="mt-8 p-3 rounded bg-black text-white w-full hover:opacity-90"
              type="submit"
              name="signIn"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
