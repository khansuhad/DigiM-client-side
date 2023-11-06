import PropTypes from 'prop-types';

const SuccessStory = ({storie}) => {
    const {story , email , photo , name} = storie ;
    return (
        <div>
              <div className="flex gap-2 items-center ">
            <img src={photo} alt="" className=" h-10 w-10 rounded-full" />
            <h1 className="font-medium text-xl"> {name}</h1>
        </div>
        <h1 className="font-base text-xl text-left">{email}</h1>
        <div>
            <h1 className="text-left mt-5 text-lg ">{story}</h1>
        </div>
        <hr className="w-full my-5 border-2 border-gray-700 rounded" />
        </div>
    );
};

export default SuccessStory;
SuccessStory.propTypes = {
    storie: PropTypes.node,
 }