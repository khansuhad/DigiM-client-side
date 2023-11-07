import { useContext,  useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from 'react-helmet';
  import Swal from 'sweetalert2';
const MyPostedJobs = () => {
  const {user} = useContext(AuthContext);
  const myEmail = user?.email ;
  const allJobs = useLoaderData();
  const jobs = allJobs?.filter( job => job?.email === myEmail);
  const [myJobs , setMyJobs] = useState(jobs);

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
        fetch(`http://localhost:5000/jobs/catagory/${id}`, {
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(data =>{
            if(data?.deletedCount > 0){
                Swal.fire(
                  'Deleted!',
                  'The contact has been deleted.',
                  'success'
                )
                const remainingData = myJobs?.filter(item => item._id !== id)
                setMyJobs(remainingData);
            }
        })
    }
  })






  // fetch(`http://localhost:5000/jobs/catagory/${id}`,{
  //     method:"DELETE"
  // })
  // .then(res => res.json())
  // .then(data => {
  //     console.log(data)
  //     if(data?.deletedCount > 0) {
        
  //       // console.log(remainingData)
  //       toast.success("Deleted successfully", {
  //           position: "top-right",
  //           autoClose: 2000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //           });
           
          
  //      }
  // })
}
    return (
       <div className=" bg-slate-200 py-20">
            <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-5xl pb-4 lg:pb-10">My Posted Jobs</h1>
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