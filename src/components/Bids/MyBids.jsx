import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyBids = () => {
  const {user} = useContext(AuthContext)
  const bids = useLoaderData();
  console.log(bids)
  const mybids = bids?.filter( bids => bids?.myEmail === user?.email )
  console.log(mybids)
  const [allBids , setAllBids] = useState(mybids);
    return (
        <div className="w-[90%] mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
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
      allBids?.map( bid =>   <tr key={bid?._id}>
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
      </tr>) 
    }
   
    </tbody>
    {/* foot */}

    
  </table>
</div>
        </div>
    );
};

export default MyBids;