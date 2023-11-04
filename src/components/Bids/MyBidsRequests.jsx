
const MyBidsRequests = () => {
    return (
        <div className="w-[90%] mx-auto text-center">
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
      <tr className="text-xl">
        <td>
          <div className="flex items-center space-x-3">
           <div className="font-bold">Job tile</div>
             </div>
        </td>
        <td>
         <h1>Email</h1>
        </td>
        <td>Deadline</td>
        <th >
          <h1>status</h1>
         
        </th>
        <th>
        <div className="flex flex-col gap-2">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-primary">Cancel</button>
        </div>
        </th>
      </tr>
   
    </tbody>
    {/* foot */}

    
  </table>
</div>
        </div>
    );
};

export default MyBidsRequests;