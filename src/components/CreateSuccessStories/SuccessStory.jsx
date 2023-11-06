import { Link } from "react-router-dom";
import SuccessStories from "../Home/SuccessStories";


const SuccessStory = () => {
    return (
        <div className="flex flex-col gap-5 justify-center bg-base-200 py-20">
          <div className="lg:w-[15%] mx-auto">
          <Link to="/createsuccessstory" className="font-bold flex justify-end w-fit text-center border-2  border-green-600 border-2 underline p-4 rounded ">Create your own Success story....</Link>
          </div>
            <SuccessStories></SuccessStories>
            
        </div>
    );
};

export default SuccessStory;