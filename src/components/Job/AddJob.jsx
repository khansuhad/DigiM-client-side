import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";

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

     fetch('http://localhost:5000/jobs' ,{
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
            navigate('/mypostedjobs')
        }
     })
    

    }

    return (
        <div>
            <Helmet>
                <title>DigiM | Add Job</title>
            </Helmet>
            <h1 className="text-5xl text-center">Add Job Form</h1>
            

            <form onSubmit={handleAddForm} className="w-[60%] mx-auto">
                <div className="grid lg:grid-cols-2 items-center gap-5 mt-10 ">
                <h2 className="text-xl  font-medium ">Your email : {user?.email}</h2>
                <select id="dropdown" name="dropdown" className=" w-full py-2 border rounded  ">
                    
                     <option value="digitalmarketing">Digital Marketing</option>
                     <option value="grapicsdesign">Grapics Design</option>
                     <option value="webdevolopment">Web Devolopment</option>
    </select>
                </div>
            <div className="flex flex-col lg:flex-row gap-5  mt-5">
                    <input type="text" name="jobTitle" placeholder="Job title" className="input input-bordered input-error w-full " />
                    <input type="text" name="deadLine" placeholder="Deadline" className="input input-bordered input-error w-full " />
            </div>
            <div className="flex flex-col lg:flex-row gap-5  mt-5">
                    <input type="text" name="minimumPrice" placeholder="Minimum price" className="input input-bordered input-error w-full " />
                    <input type="text" name="maximumPrice" placeholder="Maximum price" className="input input-bordered input-error w-full " />
            </div>
            <div className="w-full mt-5">
            <textarea  name="description" className="textarea textarea-error w-full col-span-10" placeholder="Description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-3">Add Job</button>
            </form>

        </div>
    );
};

export default AddJob;