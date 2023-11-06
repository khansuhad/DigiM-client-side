import { useContext,  useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Helmet } from 'react-helmet';
const MyPostedJobs = () => {
  const {user} = useContext(AuthContext);
  const myEmail = user?.email ;
  const allJobs = useLoaderData();
  const jobs = allJobs?.filter( job => job?.email === myEmail);
  const [myJobs , setMyJobs] = useState(jobs);

const handleDeleteJob = (id) => {
  fetch(`http://localhost:5000/jobs/catagory/${id}`,{
      method:"DELETE"
  })
  .then(res => res.json())
  .then(data => {
      console.log(data)
      if(data?.deletedCount > 0) {
        const remainingData = myJobs?.filter(item => item._id !== id)
        console.log(remainingData)
        toast.success("Deleted successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setMyJobs(remainingData);
          
       }
  })
}
    return (
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
          <Helmet>
            <title>DigiM | My Posted Jobs</title>
          </Helmet>
         {
          myJobs?.map(  job =>    <div key={job?._id} className="card  bg-base-100 shadow-xl overflow-hidden">
          <div className="card-body">
            <h2 className="card-title">{job?.jobTitle}</h2>
            <h3>Price : ${job?.minimumPrice} - ${job?.maximumPrice}</h3>
            <h3> DeadLine : {job?.deadLine}</h3>
            <p>{job?.description}</p>
            <div className="  flex gap-5 justify-center items-center">
              <Link to={`/updatepostedjobs/${job?._id}`} className="btn btn-primary">Update</Link>
              <button className="btn btn-primary" onClick={() => handleDeleteJob(job?._id)}>Delete</button>
            </div>
          </div>
        </div>)
         }
<ToastContainer />
        </div>
    );
};

export default MyPostedJobs;