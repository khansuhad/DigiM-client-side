

const JobDetails = () => {
    return (
        <div className="lg:w-[40%] mx-auto mt-20  ">
            <div className="  ">
            <h1 className="text-4xl font-semibold">Job Name</h1>
            <h2 className="text-2xl font-normal mt-3">Price</h2>
            </div>
            <div>
                <h1 className="text-2xl font-normal my-3">DeadLine</h1>
                <p className="text-xl font-light">description</p>
            </div>

            <div>
                <h1 className="text-center text-4xl">Place your Bid</h1>
                <form action="">
                    <div className="flex gap-5  mt-10">
                    <input type="text" placeholder="Type here" className="input input-bordered input-error w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered input-error w-full " />
                    </div>
                    <div className="  mt-10 text-2xl">
                        <h1>Your email : suhadahmodkhan@gmail.com</h1>
                        <h1>job owner email : suhadahmodkhan1@gmail.com</h1>
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-10 text-2xl ">Bid</button>
                </form>
            </div>
        </div>
    );
};

export default JobDetails;