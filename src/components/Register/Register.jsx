import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="my-10">
        <img
src="https://i.ibb.co/4Vy3BMn/wave-1.png"
className="fixed hidden lg:block inset-0 h-full -z-10"

/>
<div
className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
>
<img
 src="https://i.ibb.co/JcGpQ3W/unlock.jpg"
 className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
/>
<div className=' '>
<form className="flex flex-col justify-center items-center lg:w-1/2 mb-6">
 <img src="https://i.ibb.co/5FRNHT7/avatar.jpg" className="w-32" />
 <h2
   className="my-8 font-display font-bold text-3xl text-gray-700 text-center"
 >
   Welcome to you
 </h2>
 <div className="relative">
   <i className="fa fa-user absolute text-[#F9A826] text-xl"></i>
   <input
     type="text"
     placeholder="username"
     className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500 capitalize text-lg"
   />
 </div>
 <div className="relative mt-8">
   <i className="fa fa-lock absolute text-[#F9A826] text-xl"></i>
   <input
     type="password"
     placeholder="Email"
     className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500 capitalize text-lg"
   />
 </div>
 <div className="relative mt-8">
   <i className="fa fa-lock absolute text-[#F9A826] text-xl"></i>
   <input
     type="password"
     placeholder="photoURl"
     className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500 capitalize text-lg"
   />
 </div>
 <div className="relative mt-8">
   <i className="fa fa-lock absolute text-[#F9A826] text-xl"></i>
   <input
     type="password"
     placeholder="password"
     className="pl-8 border-b-2 font-display rounded focus:outline-none focus:border-[#F9A826] transition-all duration-500 capitalize text-lg"
   />
 </div>
 <a
   href="#"
   className="py-3 px-20 bg-[#F9A826] rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
   >Register</a
 >
</form>
<Link to='/login' className='lg:pl-20 mt-8 text-xl font-semibold'>Do you have an account ? Please <span className='text-[#F9A826] underline'>Sign in</span></Link>
</div>
</div>

 </div>
    );
};

export default Register;