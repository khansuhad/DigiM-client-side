import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from 'react-helmet';
const MyBidsRequests = () => {
  const {user} = useContext(AuthContext)
  const bids = useLoaderData();
  const [allBids , setAllBids] = useState([]);
  

  useEffect(() => {
    const mybid = bids?.filter( bids => bids?.myEmail !== user?.email )
    setAllBids(mybid)
  },[bids, user?.email])
 
 
 console.log(allBids)
   const acceptStatus = "In progress...";
   const cancelStatus = "Cancelled..."
  const handleBid = ( id , status ) => {
console.log(status)
    fetch(`http://localhost:5000/bids/${id}`, {
      method:'PATCH',
      headers:{
          'content-type' : 'application/json',
      },
      body : JSON.stringify({status})
  })
  .then(res => res.json())
      .then(data => {
       if(data?.modifiedCount > 0){
        const remainingData = allBids?.filter( data => data?._id !== id);
        const updated = allBids?.find( data => data?._id === id )
        const updatedBids =[updated , ...remainingData]
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
      bid?.status === "Pending..." ?  <div className="flex flex-col gap-2">
      <button className="btn btn-primary" onClick={() => handleBid(bid?._id, acceptStatus)}>Accept</button>
      <button className="btn btn-primary" onClick={() => handleBid(bid?._id, cancelStatus)} >Cancel</button>
  </div> : <></>
     }
      </th>
    </tr>)
     }
   
    </tbody>
    {/* foot */}

    
  </table>
</div>
        </div>
    );
};

export default MyBidsRequests;