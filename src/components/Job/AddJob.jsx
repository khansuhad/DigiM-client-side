

const AddJob = () => {

    const handleAddForm = (e) => {
        e.preventDefault();
        const form = e.target ;
        const jobTitle = form.jobTitle.value ;
        const deadLine = form.deadLine.value ;
        const minimumPrice = form.minimumPrice.value ;
        const maximumPrice = form.maximumPrice.value ;
        const description = form.description.value ;
        
        const addForm = {jobTitle, deadLine, minimumPrice , maximumPrice , description};
        console.log(addForm);

     fetch('http://localhost:5000/job' ,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(addForm),
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
     })
    

    }

    return (
        <div>
            <h1 className="text-5xl text-center">Add Job Form</h1>
            

            <form onSubmit={handleAddForm} className="w-[60%] mx-auto">
                <div>
                <h2 className="text-3xl  font-light mt-10">Your email : suhadahmodkhan@gamil.com</h2>
                </div>
            <div className="flex gap-5  mt-5">
                    <input type="text" name="jobTitle" placeholder="Job title" className="input input-bordered input-error w-full " />
                    <input type="text" name="deadLine" placeholder="Deadline" className="input input-bordered input-error w-full " />
            </div>
            <div className="flex gap-5  mt-5">
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