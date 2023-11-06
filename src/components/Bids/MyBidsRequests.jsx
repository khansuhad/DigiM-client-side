import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from 'react-helmet';
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyBidsRequests = () => {
  const {user} = useContext(AuthContext)
  const bids = useLoaderData();
  const [allBids , setAllBids] = useState();
  

  useEffect(() => {
    const mybid = bids?.filter( bids => bids?.myEmail !== user?.email )
    setAllBids(mybid)
  },[bids, user?.email])
 
 
 console.log(bids)
   const acceptStatus = "In progress";
   const cancelStatus = "Cancelled"
  const handleAcceptBid = ( id  ) => {

    fetch(`http://localhost:5000/bids/${id}`, {
      method:'PATCH',
      headers:{
          'content-type' : 'application/json',
      },
      body : JSON.stringify({status : acceptStatus})
  })
  .then(res => res.json())
      .then(data => {
       if(data?.modifiedCount > 0){
        toast.success("Request Accepted...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        const updatedBids = allBids.map((bid) => {
          if (bid._id === id) {
            return { ...bid, status: acceptStatus };
          }
          return bid;
        });
        setAllBids(updatedBids)
       }
      })

  }
  const handleCancelBid = ( id  ) => {

    fetch(`http://localhost:5000/bids/${id}`, {
      method:'PATCH',
      headers:{
          'content-type' : 'application/json',
      },
      body : JSON.stringify({status : cancelStatus})
  })
  .then(res => res.json())
      .then(data => {
       if(data?.modifiedCount > 0){
        toast.error("Request Cancelled...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          const updatedBids = allBids.map((bid) => {
            if (bid._id === id) {
              return { ...bid, status: cancelStatus };
            }
            return bid;
          });
          setAllBids(updatedBids)
        
        
       }
      })

  }
 
 
    return (
        <div className="w-[90%] mx-auto text-center">
          <Helmet>
            <title>DigiM | My Bid Requests</title>
          </Helmet>
                    <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-2xl">
        <th>Job Title</th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      allBids?.map( bid =>  <tr className="text-xl" key={bid?._id}>
      <td>
        <div className="flex items-center space-x-3">
         <div className="font-bold">{bid?.jobTitle}</div>
           </div>
      </td>
      <td>
       <h1>{bid?.email}</h1>
      </td>
      <td>{bid?.bidDeadLine}</td>
      <th >  
        <h1>{bid?.status}</h1>
       
      </th>
      <th>
     {
      bid?.status === "Pending" ?  <div className="flex flex-col gap-2">
      <button className="btn btn-primary" onClick={() => handleAcceptBid(bid?._id)}>Accept</button>
      <button className="btn btn-primary" onClick={() => handleCancelBid(bid?._id)} >Cancel</button>
  </div> : <></>
     }
      </th>
    </tr>)
     }
   
    </tbody>
    {/* foot */}

    
  </table>
</div>
<ToastContainer />
        </div>
    );
};

export default MyBidsRequests;