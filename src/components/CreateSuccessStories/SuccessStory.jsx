import { Link } from "react-router-dom";
import SuccessStories from "../Home/SuccessStories";


const SuccessStory = () => {
    return (
        <div className="flex flex-col gap-5 justify-center">
          <div className="lg:w-[15%] mx-auto">
          <Link to="/createsuccessstory" className="font-bold flex justify-end w-fit text-center border-2 border-red-200 underline p-4 rounded ">Create your own Success story....</Link>
          </div>
            <SuccessStories></SuccessStories>
            
        </div>
    );
};

export default SuccessStory;