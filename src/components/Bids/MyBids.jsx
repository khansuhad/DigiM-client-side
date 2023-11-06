import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from 'react-helmet';
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyBids = () => {
  const {user} = useContext(AuthContext)
  const bids = useLoaderData();
  console.log(bids)

  const [allBids , setAllBids] = useState([]);
useEffect(() => {
  const mybids = bids?.filter( bids => bids?.myEmail === user?.email )
  console.log(mybids)
  setAllBids(mybids);
},[bids,user?.email])

  const handleCompleted = ( id  ) => {

        fetch(`http://localhost:5000/bids/${id}`, {
          method:'PATCH',
          headers:{
              'content-type' : 'application/json',
          },
          body : JSON.stringify({status : "Completed"})
      })
      .then(res => res.json())
          .then(data => {
           if(data?.modifiedCount > 0){
            toast.success("Confirmation Successful...", {
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
                  return { ...bid, status: "Completed" };
                }
                return bid;
              });
              setAllBids(updatedBids)
            
            
           }
          })
    
      }
    return (
        <div className="w-[90%] mx-auto">
          <Helmet>
            <title>DigiM | MyBids

            </title>
          </Helmet>
            <div className="overflow-x-auto">
  <table className="table text-2xl">
    {/* head */}
    <thead>
      <tr>
        <th>Job Title</th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
      allBids?.map( bid =>   <tr className="text-xl" key={bid?._id}>
        <td>
          <div className="flex items-center space-x-3">
          
            <div>
              <div className="font-bold">{bid?.jobTitle}</div>
             
            </div>
          </div>
        </td>
        <td>
         <h1>{bid?.email}</h1>
          
        </td>
        <td>{bid?.bidDeadLine}</td>
        <th>
          <h1>{bid?.status}</h1>
        </th>
        {
          bid?.status === "In progress" && <th>
            <button onClick={() => handleCompleted(bid?._id)} className="btn btn-primary">Completed</button>
          </th>
         }
      </tr>) 
    }
   
    </tbody>
    {/* foot */}

    
  </table>
</div>
<ToastContainer/>
        </div>
    );
};

export default MyBids;