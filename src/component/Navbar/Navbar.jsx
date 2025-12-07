import { Link, useNavigate } from "react-router-dom";
import MyContainer from "../MyContainer/MyContainer";
import MyLink from "../MyLink/MyLink";
import logo from "../../assets/OIP (1).webp";
import { GridLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
const { user, signoutUserFunc, setUser, loading } = useContext(AuthContext);
const navigate = useNavigate();

const handleSignout = () => {
signoutUserFunc()
.then(() => {
setUser(null);
toast.success("Sign-out successful!");
navigate("/signin");
})
.catch((e) => toast.error(e.message));
};

return (
<div className="bg-slate-100 py-2 border-b border-b-slate-300">
<MyContainer className="flex items-center justify-between">
<figure>
<img className="max-w-[75px] h-[60px]" src={logo} alt="logo" />
</figure>

    <ul className="flex items-center gap-2">
      <li><MyLink to="/">Home</MyLink></li>
      <li><MyLink to="/add-transaction">Add Transaction</MyLink></li>
      <li><MyLink to="/my-transactions">My Transactions</MyLink></li>
      <li><MyLink to="/report">Report</MyLink></li>
      
    </ul>

    {user ? (
      <div className="flex items-center gap-3">
         <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            {loading ? <GridLoader color="#e74c3c" /> : user?.displayName || "User"}
          </div>
          <ul
           tabIndex="-1"
           className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-lg"
          >
            <figure className="px-10 pt-10">
          <img
            src={
              user?.photoURL ||
              "https://i.ibb.co.com/ZRGGktJ9/istockphoto-1284796870-612x612.jpg"
            }
            alt="User Profile"
            className="rounded-full w-32 h-32 object-cover border-4 border-blue-500"
          />
        </figure>
            <li>
              <h2 className="text-lg font-semibold text-center">{user?.displayName || "Anonymous User"}</h2>
            </li>
            <li>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </li>
            <li>
              <button
                onClick={() => navigate("/update-profile")}
                className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-white"
              >
                Update Profile
              </button>
            </li>
          </ul>
        </div>

        <button
          onClick={handleSignout}
          className="btn bg-gradient-to-r from-indigo-500 via-purple-500 
            to-pink-500 text-white font-semibold border-none hover:scale-105 
            transition-transform duration-200"
        >
          Sign out
        </button>
      </div>
    ) : (
      <div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer m-2">
          <Link to="/signin">Sign in</Link>
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    )}
  </MyContainer>
</div>


);
};

export default Navbar;
