import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from 'react-helmet';
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const JobDetails = () => {
    const navigate = useNavigate();
const {user} = useContext(AuthContext)
const myEmail = user?.email ;
const suhad = useLoaderData();
const {jobTitle, deadLine, minimumPrice , maximumPrice , description , email} = suhad || {} ;

const handleBidForm = (e) => {
    e.preventDefault();
    const form = e.target ;
    const bidPrice = form.bidPrice.value ;
    const bidDeadLine = form.bidDeadLine.value ;
    const status = "Pending"
    const bidForm = {bidPrice , bidDeadLine , myEmail , email , jobTitle , deadLine , status };
console.log(bidForm)
    fetch('https://assignment-11-server-side-rust.vercel.app/bids' ,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(bidForm),
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
        if(data?.insertedId){
            toast.success(" Your Bid added successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate('/mybids')
        }
     })
    
}

    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-300 bg-opacity-90 py-20">
            <div className="w-[95%] md:w-[80%] lg:w-[40%] mx-auto border-2 p-4 rounded  ">
            <Helmet><title>DigiM | Job Details</title></Helmet>
            <div className=" text-center md:text-left  ">
            <h1 className=" text-2xl lg:text-4xl font-semibold">Job Title : {jobTitle}</h1>
            <h2 className="text-xl lg:text-2xl font-normal mt-3">Price : ${minimumPrice} - ${maximumPrice}</h2>
            </div>
            <div className="text-center md:text-left">
                <h1 className=" text-xl lg:text-2xl font-normal my-3">DeadLine : {deadLine}</h1>
                <p className="text-lg lg:text-xl font-light">{description}</p>
            </div>

            <div>
                <h1 className="text-center text-4xl mt-20 font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none">Place your Bid</h1>
                <div className="px-10  mt-10 text-xl md:text-2xl">
                        <h1 className="font-extralight"><span className="font-semibold">Your email :</span> {myEmail}</h1>
                        <h1 className="font-extralight"><span className="font-semibold">owner email :</span> {email}</h1>
                    </div>
                <form action="" onSubmit={handleBidForm}>
                    <div className="flex flex-col gap-5 lg:flex-row mt-10 w-[90%] mx-auto">
                    <input type="number" name="bidPrice" placeholder="Price" className="input input-bordered input-error w-full text-xs md:text-xl  border-orange-600 border-2 outline-none " required />
                    <input type="date" name="bidDeadLine" placeholder="DeadLine" className="input input-bordered input-error w-full text-xs md:text-xl  border-orange-600 border-2 outline-none " required />
                    </div>
                   {
                    myEmail !== email ?  <button  className="btn btn-primary w-full mt-10 text-2xl ">Bid</button> :
                    <h1 className="mt-10 text-2xl font-bold  text-center">You can not bid your own posted job</h1>
                   }
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default JobDetails;