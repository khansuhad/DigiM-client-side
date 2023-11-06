import PropTypes from 'prop-types';

const SuccessStory = ({storie}) => {
    const {story , email , photo , name} = storie ;
    return (
        <div>
              <div className="flex gap-5 items-center ">
            <img src={photo} alt="" className=" h-14 w-14 rounded-full" />
            <h1 className="font-medium text-2xl"> {name}</h1>
        </div>
        <h1 className="font-base text-2xl text-left">{email}</h1>
        <div>
            <h1 className="text-left mt-5 text-base ">{story}</h1>
        </div>
        <hr className="w-full my-5 border-2 border-sky-200" />
        </div>
    );
};

export default SuccessStory;
SuccessStory.propTypes = {
    storie: PropTypes.node,
 }