import { useEffect, useState } from "react";
import SuccessStory from "./SuccessStory";

const SuccessStories = () => {
    const [stories , setStories] = useState()
    useEffect(() => {

        fetch('http://localhost:5000/stories')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setStories(data)
        })

    },[])
    return (
        <div className="text-center">
            <h1 className="font-bold text-center text-5xl my-20">Success Stories...</h1>
            <div className="w-[80%] mx-auto">
          {
            stories?.map( story => <SuccessStory key={story?._id} storie={story}></SuccessStory>   )
          }
                
            </div>
        
        </div>
    );
};

export default SuccessStories;