import { useEffect, useState } from "react";
import SuccessStory from "./SuccessStory";

const SuccessStories = () => {
    const [stories , setStories] = useState()
    useEffect(() => {

        fetch('https://assignment-11-server-side-rust.vercel.app/stories')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setStories(data)
        })

    },[])
    return (
       <div>
         <div className="text-center bg-white py-10 w-[95%] md:w-[90%] lg:w-[80%] mx-auto border-2 rounded border-gray-700 mt-20">
            <h1 className="font-bold text-center text-3xl my-10 md:text-5xl rounded w-fit mx-auto px-4 py-2 bg-gradient-to-r  from-purple-500 to-pink-500 text-white border-none">Success Stories...</h1>
            <div className="w-[80%] mx-auto">
          {
            stories?.map( story => <SuccessStory key={story?._id} storie={story}></SuccessStory>   )
          }
                
            </div>
        
        </div>
       </div>
    );
};

export default SuccessStories;