

const UpdateMyPostedJobs = () => {
    return (
        <div>
            <h1 className="text-5xl text-center">Update Job Form</h1>
            

            <form action="" className="w-[60%] mx-auto">
                <div>
                <h2 className="text-3xl  font-extralight mt-10">Your email : suhadahmodkhan@gamil.com</h2>
                </div>
            <div className="flex gap-5  mt-5">
                    <input type="text" placeholder="Job title" className="input input-bordered input-error w-full " />
                    <input type="text" placeholder="Deadline" className="input input-bordered input-error w-full " />
            </div>
            <div className="flex gap-5  mt-5">
                    <input type="text" placeholder="Minimum pricec" className="input input-bordered input-error w-full " />
                    <input type="text" placeholder="Maximum price" className="input input-bordered input-error w-full " />
            </div>
            <div className="w-full mt-5">
            <textarea className="textarea textarea-error w-full col-span-10" placeholder="Bio"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full mt-3">Update Job</button>
            </form>

        </div>
    );
};

export default UpdateMyPostedJobs;