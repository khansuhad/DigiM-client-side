import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from 'react-helmet';

const JobDetails = () => {
const {user} = useContext(AuthContext)
const myEmail = user?.email ;
const suhad = useLoaderData();
const {jobTitle, deadLine, minimumPrice , maximumPrice , description , email} = suhad || {} ;

const handleBidForm = (e) => {
    e.preventDefault();
    const form = e.target ;
    const bidPrice = form.bidPrice.value ;
    const bidDeadLine = form.bidDeadLine.value ;
    const status = "Pending..."
    const bidForm = {bidPrice , bidDeadLine , myEmail , email , jobTitle , deadLine , status };
console.log(bidForm)
    fetch('http://localhost:5000/bids' ,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(bidForm),
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
     })
    
}

    return (
        <div className="md:w-[80%] lg:w-[40%] mx-auto mt-20  ">
            <Helmet><title>DigiM | Job Details</title></Helmet>
            <div className=" text-center md:text-left   ">
            <h1 className=" text-2xl lg:text-4xl font-semibold">{jobTitle}</h1>
            <h2 className="text-xl lg:text-2xl font-normal mt-3">Price : ${minimumPrice} - ${maximumPrice}</h2>
            </div>
            <div className="text-center md:text-left">
                <h1 className=" text-xl lg:text-2xl font-normal my-3">DeadLine : {deadLine}</h1>
                <p className="text-lg lg:text-xl font-light">{description}</p>
            </div>

            <div>
                <h1 className="text-center text-4xl mt-20">Place your Bid</h1>
                <div className="px-10  mt-10 text-xl md:text-2xl">
                        <h1 className="font-extralight"><span className="font-semibold">Your email :</span> {myEmail}</h1>
                        <h1 className="font-extralight"><span className="font-semibold">job owner email :</span> {email}</h1>
                    </div>
                <form action="" onSubmit={handleBidForm}>
                    <div className="flex flex-col gap-5 lg:flex-row mt-10 w-[90%] mx-auto">
                    <input type="text" name="bidPrice" placeholder="Price" className="input input-bordered input-error w-full " required />
                    <input type="text" name="bidDeadLine" placeholder="DeadLine" className="input input-bordered input-error w-full " required />
                    </div>
                   {
                    myEmail !== email ?  <button  className="btn btn-primary w-full mt-10 text-2xl ">Bid</button> :
                    <h1 className="mt-10 text-2xl font-bold  text-center">You can not bid your own posted job</h1>
                   }
                </form>
            </div>
        </div>
    );
};

export default JobDetails;