import { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from 'react-helmet';

const UpdateMyPostedJobs = () => {
    const {user} = useContext(AuthContext);
    const myEmail = user?.email ;
    const job = useLoaderData();
    const navigate = useNavigate();
    const {jobTitle, deadLine, minimumPrice , maximumPrice , description , _id } = job 

  const handleUpdateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const jobTitle = form.jobTitle.value;
    const deadLine = form.deadLine.value;
    const minimumPrice = form.minimumPrice.value;
    const maximumPrice = form.maximumPrice.value;
    const description = form.description.value;
   
    const updateForm = { jobTitle , deadLine , minimumPrice , maximumPrice , description }
    console.log(updateForm);

    fetch(`http://localhost:5000/jobs/catagory/${_id}` , {
        method:'PUT',
        headers:{
            'content-type' : 'application/json',
        },
        body : JSON.stringify(updateForm)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data?.modifiedCount > 0){
            toast.success("Updated successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                navigate('/')
        }
    })
}
    return (
        <div>
            <Helmet><title>DigiM | Update Jobs</title></Helmet>
            <h1 className="text-5xl text-center">Update Job Form</h1>
            

            <form action="" className="w-[60%] mx-auto" onSubmit={handleUpdateForm}>
                <div>
                <h2 className="text-3xl  font-light mt-10">Your email : {myEmail}</h2>
                </div>
            <div className="flex gap-5  mt-5">
                    <input name="jobTitle" defaultValue={jobTitle} type="text" placeholder="Job title" className="input input-bordered input-error w-full " />
                    <input name="deadLine" defaultValue={deadLine} type="text" placeholder="Deadline" className="input input-bordered input-error w-full " />
            </div>
            <div className="flex gap-5  mt-5">
                    <input name="minimumPrice" defaultValue={minimumPrice} type="text" placeholder="Minimum price" className="input input-bordered input-error w-full " />
                    <input name="maximumPrice" defaultValue={maximumPrice} type="text" placeholder="Maximum price" className="input input-bordered input-error w-full " />
            </div>
            <div className="w-full mt-5">
            <textarea className="textarea textarea-error w-full col-span-10" name="description" defaultValue={description} placeholder="Bio"></textarea>
            </div>
            <button  className="btn btn-primary w-full mt-3">Update Job</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateMyPostedJobs;