import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    console.log(name, email, password, photoURL);

    if (password.length < 6) {
      toast.error(" Password must be 6 charecter.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error(" Password must be Uppercase.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!/[#?!@%$^*&-]/.test(password)) {
      toast.error(" Password must be have atleast one special charecter.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            toast.success("Account created and login successfully", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            return;
          });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <div className="my-10">
        <Helmet>
            <title>DigiM | Register</title>
          </Helmet>
      <img
        src="https://i.ibb.co/4Vy3BMn/wave-1.png"
        className="fixed hidden lg:block inset-0 h-full z-10"
      />
      <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        <img
          src="https://i.ibb.co/JcGpQ3W/unlock.jpg"
          className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto z-20"
        />
        <div className=" ">
          <form
            className="flex flex-col justify-center items-center lg:w-1/2 mb-6"
            onSubmit={handleRegister}
          >
            <img src="https://i.ibb.co/5FRNHT7/avatar.jpg" className="w-32" />
            <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
              Welcome to you
            </h2>
            <div className="relative">
              <i className="fa fa-user absolute text-[#F9A826] text-xl"></i>
              <input
                type="text"
                name="name"
                placeholder="username"
                className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500 capitalize text-lg"
              />
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-[#F9A826] text-xl"></i>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500  text-lg"
              />
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-[#F9A826] text-xl"></i>
              <input
                type="text"
                name="photoURL"
                placeholder="photoURl"
                className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500 capitalize text-lg"
              />
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-[#F9A826] text-xl"></i>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500 capitalize text-lg"
              />
            </div>
            <button
            
              className="py-3 px-20 bg-[#F9A826] rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
            >
              Register
            </button>
          </form>
          <Link to="/login" className="lg:pl-20 mt-8 text-xl font-semibold">
            Do you have an account ? Please{" "}
            <span className="text-[#F9A826] underline">Sign in</span>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
