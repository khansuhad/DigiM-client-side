import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";


const Nav = () => {
  const {user , logOut  } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
    .then(() => {
      console.log('successfully sign out ')
      toast.success("sign out successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    .catch(error => {
      console.log(error.message)
    })
   }
    return (
        <div className="navbar bg-gray-100 text-2xl flex items-center w-[90%] mx-auto mb-16 pt-10">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/addjob'>Add job</Link></li>
              <li><Link to='/mypostedjobs'>My posted Jobs</Link></li>
              <li><Link to='/mybids'>My Bids</Link></li>
              <li><Link to='/bidrequests'>Bid Requests</Link></li>
              <li><Link to='/successstory'>Success Stories</Link></li>
            </ul>
          </div>

          <a className="btn btn-ghost normal-case text-xl">
            <img src="https://i.ibb.co/Y7sygTM/Whats-App-Image-2023-11-04-at-8-05-03-PM.jpg" alt="" className="h-12 " />
         
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl">
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/addjob'>Add job</Link></li>
              <li><Link to='/mypostedjobs'>My posted Jobs</Link></li>
              <li><Link to='/mybids'>My Bids</Link></li>
              <li><Link to='/bidrequests'>Bid Requests</Link></li>
              <li><Link to='/successstory'>Success Stories</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
        {
                user ? <div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 overflow-hidden shadow  rounded-box w-52`}>
                 
                  <li><a className="text-2xl font-bold  text-center">{user?.displayName}</a></li>
                  <li> <Link  className="btn text-2xl font-semibold" onClick={handleSignOut}>Log out</Link></li>
                </ul>
              </div> </div> :
                <Link to='/login' className="btn text-2xl font-semibold">Login</Link>
             }
        </div>
        <ToastContainer />
      </div>
    );
};

export default Nav;