import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyContainer from "../../component/MyContainer/MyContainer";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
  const [type, setType] = useState(true);

  const {
  createUserWithEmailAndPasswordFunc,
  signInWithPopupFunc,
  updateProfileFunc,
  signoutUserFunc,
  setLoading,
  setUser,
} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignup = (e) => {
    e.preventDefault();

    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const photoURL = e.target.photo?.value;
    const password = e.target.password?.value;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, number & special character!"
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then(() => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            signoutUserFunc().finally(() => {
              setLoading(false);
              toast.success("Signup successful! Please sign in.");
              navigate("/signin");
            });
          })
          .catch((e) => toast.error(e.message));
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("User already exists!");
        } else {
          toast.error(e.message);
        }
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopupFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Google Login Successful!");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Google login failed!"));
  };

  return (
    <section className="flex items-center py-10 px-4 bg-neutral text-black md:px-7 xl:px-0">
      <MyContainer>
            <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">

{/* Left Colorful Panel */}

<div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-orange-400 to-red-500 text-white p-12 space-y-6 relative overflow-hidden"> {/* On mobile, show above form */} <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div> <h1 className="text-4xl font-extrabold z-10 text-center">Welcome to FinEase!</h1> <p className="text-lg text-center z-10">Track your finances effortlessly and securely.</p> <button onClick={() => navigate("/signin")} className="mt-4 px-10 py-3 bg-white text-orange-500 font-bold rounded-full shadow-lg hover:scale-105 transition-transform z-10" > Log In </button> <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div> </div>

{/* Right Form Panel */}

<div className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-2xl relative shadow-lg mt-8 md:mt-0"> <h2 className="font-extrabold text-2xl lg:text-3xl mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"> Sign <span className="text-orange-500">Up</span> </h2>
<form onSubmit={handleSignup} className="space-y-6">
  <input
    type="text"
    name="name"
    placeholder="Name"
    className="w-full p-4 rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-lg transition shadow-sm"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full p-4 rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-lg transition shadow-sm"
    required
  />
  <input
    type="text"
    name="photo"
    placeholder="Photo URL"
    className="w-full p-4 rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-lg transition shadow-sm"
  />

  <div className="relative">
    <input
      type={type ? "text" : "password"}
      name="password"
      placeholder="Password"
      className="w-full p-4 rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-lg transition shadow-sm"
      required
    />
    <span
      onClick={() => setType(!type)}
      className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-orange-500 hover:text-red-500 transition text-xl"
    >
      {type ? <IoMdEyeOff /> : <IoEye />}
    </span>
  </div>

  <button className="w-full p-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform text-lg">
    Sign Up
  </button>
</form>

<div className="divider text-orange-300 my-6">or</div>

<button
  onClick={handleGoogleSignin}
  className="w-full p-4 border border-orange-300 rounded-full font-semibold text-orange-600 hover:bg-orange-50 transition text-lg flex justify-center items-center gap-3 shadow-sm"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="google"
    className="w-6 h-6"
  />
  Sign up with Google
</button>

</div> </div>

      </MyContainer>
    </section>
  );
};

export default Signup;
