import React from 'react';

const HomeBanner = () => {
    return (
    <div className='w-[90%] mx-auto rounded lg:h-screen '>
        <div className="carousel w-full h-5/6">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.postimg.cc/MTtBVjBw/Ubersuggest-April-Headers-Image-11-1.webp" className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.postimg.cc/qBbn7y0X/hands-using-mobile-payments-digital-600nw-1084540781.webp" className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.postimg.cc/Jh5HCBPX/history-and-evolution-of-digital-marketing.jpg" className="w-full rounded" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.postimg.cc/wTRtTrwg/1662817728493.jpg" className="w-full rounded" />
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