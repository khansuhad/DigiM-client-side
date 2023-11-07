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

    fetch(`https://assignment-11-server-side-rust.vercel.app/jobs/catagory/${_id}` , {
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
                navigate(-1)
        }
    })
}
    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-300 bg-opacity-90 pb-20 pt-10 rounded">
            <Helmet><title>DigiM | Update Jobs</title></Helmet>
            <h1 className="text-2xl lg:text-5xl font-bold text-center w-fit mx-auto px-4 py-2 rounded mb-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none ">Update Job Form</h1>
            

            <form action="" className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto" onSubmit={handleUpdateForm}>
                <div className="grid lg:grid-cols-2 items-center gap-5 mt-10 ">
                <h2 className="text-xl lg:text-2xl  font-normal "><span className="font-semibold">Your email :</span> {myEmail}</h2>
                <select id="dropdown" name="dropdown" className=" w-full py-2 border rounded font-medium outline-none px-3 " required>
                    
                    <option value="digitalmarketing">Digital Marketing</option>
                    <option value="grapicsdesign">Grapics Design</option>
                    <option value="webdevolopment">Web Devolopment</option>
   </select>
                </div>
            <div className="flex flex-col lg:flex-row gap-5  mt-5">
                    <input name="jobTitle" defaultValue={jobTitle} type="text" placeholder="Job title" className="text-xs md:text-xl  input input-bordered border-orange-600 border-2 outline-none input-error w-full " />
                    <input name="deadLine" defaultValue={deadLine} type="date" placeholder="Deadline" className="text-xs md:text-xl input input-bordered border-orange-600 border-2 outline-none input-error w-full " />
            </div>
            <div className="flex flex-col lg:flex-row gap-5  mt-5">
                    <input name="minimumPrice" defaultValue={minimumPrice} type="number" placeholder="Minimum price" className="text-xs md:text-xl input input-bordered border-orange-600 border-2 outline-none input-error w-full " />
                    <input name="maximumPrice" defaultValue={maximumPrice} type="number" placeholder="Maximum price" className="text-xs md:text-xl input input-bordered border-orange-600 border-2 outline-none input-error w-full " />
            </div>
            <div className="w-full mt-5">
            <textarea className="textarea textarea-error w-full col-span-10 border-orange-600 border-2 outline-none text-xs md:text-xl" name="description" defaultValue={description} placeholder="Bio"></textarea>
            </div>
            <button  className="btn btn-primary w-full mt-3">Update Job</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateMyPostedJobs;