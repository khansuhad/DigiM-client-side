import { Link } from "react-router-dom";


const MyPostedJobs = () => {
    return (
        <div className="w-[90%] mx-auto grid grid-cols-4  gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <h3>Price : range</h3>
    <h3> deadline</h3>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="  flex gap-5 justify-center items-center">
      <Link to='/updatepostedjobs' className="btn btn-primary">Update</Link>
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default MyPostedJobs;