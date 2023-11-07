import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AddJob = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    console.log(user?.email)
    const handleAddForm = (e) => {
        e.preventDefault();
        const form = e.target ;
        const jobTitle = form.jobTitle.value ;
        const deadLine = form.deadLine.value ;
        const minimumPrice = form.minimumPrice.value ;
        const maximumPrice = form.maximumPrice.value ;
        const description = form.description.value ;
        const  catagory = form.dropdown.value ;
        const email = user?.email
        
        const addForm = {jobTitle, deadLine, minimumPrice , maximumPrice , description , catagory, email};
        console.log(addForm);

     fetch('https://assignment-11-server-side-rust.vercel.app/jobs' ,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(addForm),
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
        if(data?.insertedId){
            toast.success("Job Posted Successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate('/mypostedjobs')
        }
     })
    

    }

    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-300 bg-opacity-90 py-20 rounded">
            <Helmet>
                <title>DigiM | Add Job</title>
            </Helmet>
            <h1 className="text-5xl text-center font-bold bg-gradient-to-r w-fit mx-auto px-4 py-2 rounded from-purple-500 to-pink-500 text-white border-none">Add Job Form</h1>
            

            <form onSubmit={handleAddForm} className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto text-black">
                <div className="grid lg:grid-cols-2 items-center gap-5 mt-10 ">
                <h2 className="text-xl  font-medium ">Your email : {user?.email}</h2>
                <select id="dropdown" name="dropdown" className=" w-full py-2 border rounded font-medium outline-none px-3 " required>
                    
                     <option value="digitalmarketing">Digital Marketing</option>
                     <option value="grapicsdesign">Grapics Design</option>
                     <option value="webdevolopment">Web Devolopment</option>
    </select>
                </div>
            <div className="flex flex-col lg:flex-row gap-5  mt-5">
                    <input type="text" required name="jobTitle" placeholder="Job title" className="text-xs md:text-xl border-orange-600 border-2 outline-none input input-bordered input-error w-full " />
                    <input type="date" required name="deadLine" placeholder="Deadline" className="text-xs md:text-xl  border-orange-600 border-2 outline-none input input-bordered input-error w-full " />
            </div>
            <div className="flex flex-col lg:flex-row gap-5  mt-5">
                    <input type="number" required name="minimumPrice" placeholder="Minimum price" className="text-xs md:text-xl border-orange-600 border-2 outline-none input input-bordered input-error w-full " />
                    <input type="number" required name="maximumPrice" placeholder="Maximum price" className="text-xs md:text-xl border-orange-600 border-2 outline-none input input-bordered input-error w-full " />
            </div>
            <div className="w-full mt-5">
            <textarea  name="description" required className="textarea textarea-error w-full col-span-10 text-xs md:text-xl border-orange-600 border-2 outline-none" placeholder="Description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-3">Add Job</button>
            </form>
        <ToastContainer />
        </div>
    );
};

export default AddJob;