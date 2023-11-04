
const MyBids = () => {
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
      <tr>
        <td>
          <div className="flex items-center space-x-3">
          
            <div>
              <div className="font-bold">Job tile</div>
             
            </div>
          </div>
        </td>
        <td>
         <h1>Email</h1>
          
        </td>
        <td>Deadline</td>
        <th>
          <h1>status</h1>
        </th>
      </tr>
   
    </tbody>
    {/* foot */}

    
  </table>
</div>
        </div>
    );
};

export default MyBids;