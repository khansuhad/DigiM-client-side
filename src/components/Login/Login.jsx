import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
    const {loginUser  , googleLogin} = useContext(AuthContext);
    
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target ;
    const email = form.email.value ;
    const password = form.password.value ;
    const loginForm = {email , password}
console.log(loginForm)
    loginUser(email , password)
    .then(res => {
        toast.success("profile updated successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            e.target.reset();
        console.log(res.user)
        navigate('/');
       
    })
    .catch(error => {
        toast.error("email or password doesn't match", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            console.log(error.message)
    })

  }
  const handleGoogle = () => {
    googleLogin()
    .then(res => {
        toast.success("profile updated successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        navigate('/');
    })
    .catch(error => {
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
            console.log(error.message)
            return
    })
}

    return (
        <div className='my-10'>
               <img
      src="https://i.ibb.co/4Vy3BMn/wave-1.png"
      className="fixed hidden lg:block inset-0 h-full z-10"
  
    />
    <div
      className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
    >
      <img
        src="https://i.ibb.co/JcGpQ3W/unlock.jpg"
        className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto z-20"
      />
   <div className='flex flex-col justify-center items-center lg:w-1/2 mb-6 '>
   <img src="https://i.ibb.co/5FRNHT7/avatar.jpg" className="w-32" />
        <h2
          className="my-8 font-display font-bold text-3xl text-gray-700 text-center"
        >
          Welcome to you
        </h2>
        <div className="flex justify-center my-5 mb-5">
            <button className="btn px-10" onClick={handleGoogle} >Google</button>
            </div>
        <div className="grid grid-cols-3 items-center justify-center gap-4">
        <hr /><h1 className="text-center ">OR</h1><hr />
        </div>
   <form className="flex flex-col justify-center items-center lg:w-1/2 mb-6" onSubmit={handleLogin}>
      
        <div className="relative">
          <i className="fa fa-user absolute text-[#F9A826] text-xl"></i>
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
            type="password"
            name="password"
            placeholder="password"
            className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500  text-lg"
          />
        </div>
        <button
          
          className="py-3 px-20 bg-[#F9A826] rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
          >Login</button>
      </form>
      <Link to='/register' className='lg:pl-20 text-xl font-semibold'>Do not have an account ? Please <span className='text-[#F9A826] underline'>sign up</span></Link>
   </div>
    </div>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;