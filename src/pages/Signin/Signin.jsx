import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyContainer from "../../component/MyContainer/MyContainer";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Signin = () => {
  const [show, setShow] = useState(false);

  const {
    signInWithEmailFunc,
    signInWithPopupFunc,
    setLoading,
    setUser,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signInWithEmailFunc(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        if (e.code === "auth/invalid-email") {
          toast.error("The email address is not valid.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("No user found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Incorrect password.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please wait and try again.");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  const handleWithGoogle = () => {
    signInWithPopupFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Google login successful!");
        navigate(from, { replace: true });
      })
      .catch(() => toast.error("Google login failed!"));
  };

  return (
    <section className='flex items-center py-10 bg-neutral text-black px-4 md:px-7 xl:px-0'>
      <MyContainer>
        <div className="flex flex-col md:flex-row-reverse rounded-3xl overflow-hidden shadow-2xl">

{/* Left Colorful Panel (Desktop only) */}

<div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-b from-orange-400 to-red-500 text-white p-12 space-y-6 relative overflow-hidden"> <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div> <h1 className="text-4xl font-extrabold z-10 text-center">Good to see you again!</h1> <p className="text-lg text-center z-10"> Keep your finances on track with <span className="font-semibold">FinEase</span> </p> <Link to="/signup" className="mt-4 px-10 py-3 bg-white text-orange-500 font-bold rounded-full shadow-lg hover:scale-105 transition-transform z-10" > Sign Up </Link> <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div> </div>

{/* Right Form Panel */}

<div className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-2xl relative shadow-lg mt-8 md:mt-0"> <h2 className="font-extrabold text-2xl lg:text-3xl mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"> Log <span className="text-orange-500">In</span> </h2>
<form onSubmit={handleLogin} className="space-y-6">
  <input
    type="email"
    name="email"
    autoComplete="email"
    placeholder="Email"
    className="w-full p-4 rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-lg transition shadow-sm"
    required
  />

  <div className="relative">
    <input
      type={show ? "text" : "password"}
      name="password"
      autoComplete="current-password"
      placeholder="Password"
      className="w-full p-4 rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none text-lg transition shadow-sm"
      required
    />
    <span
      onClick={() => setShow(!show)}
      className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-orange-500 hover:text-red-500 transition text-xl"
    >
      {show ? "👁️" : "🙈"}
    </span>
  </div>

  <button className="w-full p-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform text-lg">
    Log In
  </button>
</form>

<p className="text-center text-gray-500 mt-4 md:hidden">
  Don't have an account?{" "}
  <Link className="text-orange-500 font-semibold hover:underline" to="/signup">
    Signup
  </Link>
</p>

<div className="divider text-orange-300 my-6">or</div>

<button
  onClick={handleWithGoogle}
  className="w-full p-4 border border-orange-300 rounded-full font-semibold text-orange-600 hover:bg-orange-50 transition text-lg flex justify-center items-center gap-3 shadow-sm"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="google"
    className="w-6 h-6"
  />
  Log in with Google
</button>

</div> </div>
      </MyContainer>
    </section>
  );
};

export default Signin;
