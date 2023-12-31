import { useContext,  useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from 'react-helmet';
  import Swal from 'sweetalert2';
const MyPostedJobs = () => {
  const {user} = useContext(AuthContext);
  const [myJobs , setMyJobs] = useState([]);

  useEffect(() => {
    const URL = `https://assignment-11-server-side-rust.vercel.app/jobs/${user?.email}`
    fetch(URL , {credentials:'include'})
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMyJobs(data)
    })
},[user?.email])



const handleDeleteJob = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
        fetch(`https://assignment-11-server-side-rust.vercel.app/jobs/catagory/${id}`, {
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(data =>{
            if(data?.deletedCount > 0){
                Swal.fire(
                  'Deleted!',
                  'The posted job has been deleted.',
                  'success'
                )
                const remainingData = myJobs?.filter(item => item._id !== id)
                setMyJobs(remainingData);
            }
        })
    }
  })

};
    return (
       <div className=" bg-slate-200 pb-20 pt-10 ">
            <h1 className="text-center w-fit mx-auto px-4 py-2 rounded mb-20 font-bold text-2xl md:text-3xl lg:text-5xl   bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">My Posted Jobs</h1>
         <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 bg-slate-200">
          <Helmet>
            <title>DigiM | My Posted Jobs</title>
          </Helmet>
      
         {
          myJobs?.map(  job =>    <div key={job?._id} className="card  text-white bg-gradient-to-r from-sky-500 to-indigo-500 shadow-xl overflow-hidden">
          <div className="card-body">
            <h2 className="card-title">{job?.jobTitle}</h2>
            <h3>Price : ${job?.minimumPrice} - ${job?.maximumPrice}</h3>
            <h3 > DeadLine : {job?.deadLine}</h3>
            <p className="px-2 overflow-hidden">{job?.description}</p>
            <div className="  flex gap-5 justify-center items-center py-5">
              <Link to={`/updatepostedjobs/${job?._id}`} className="btn text-white border-none bg-gradient-to-r from-violet-500 to-fuchsia-500">Update</Link>
              <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none " onClick={() => handleDeleteJob(job?._id)}>Delete</button>
            </div>
          </div>
        </div>)
         }
<ToastContainer />
        </div>
       </div>
    );
};

export default MyPostedJobs;