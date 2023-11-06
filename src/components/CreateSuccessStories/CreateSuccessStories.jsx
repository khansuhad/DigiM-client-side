import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const CreateSuccessStories = () => {
    const {user } = useContext(AuthContext)
    const email = user?.email;
    const photo = user?.photoURL ;
    const name = user?.displayName ;
    const handleCreateStory = ( e) => {
        e.preventDefault() ;
        const form = e.target;
        const story = form.description.value ;
        const createStory = {story , email , photo , name};
        
     fetch('http://localhost:5000/stories' ,{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(createStory),
     })
     .then(res => res.json())
     .then(data => {
        console.log(data)
     })
    
    }
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-center font-bold text-3xl">Send your Success Story....</h1>
            <form className="w-full mt-5" onSubmit={handleCreateStory}>
            <textarea  name="description" className="textarea textarea-error w-full col-span-10 h-40" placeholder="Description"></textarea>
            <button  className="btn btn-primary w-full">Submit</button>
            </form>
        </div>
    );
};

export default CreateSuccessStories;