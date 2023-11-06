import React from 'react';

const HomeBanner = () => {
    return (
    <div className='w-[90%] mx-auto rounded lg:h-screen '>
        <div className="carousel w-full h-5/6">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/d0kK4WT/Ubersuggest-April-Headers-Image-11.jpg" className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/hKRNZ1M/DM-blog-post-image-03.jpg" className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/YQFgHS7/s2-2.jpg" className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/0QmQFNG/digital-marketing.jpg" className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
          <h1 className='text-5xl text-center mt-12'>Catagory</h1>
    </div>
    );
};

export default HomeBanner;