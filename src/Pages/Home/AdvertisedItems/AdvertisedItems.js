import React from 'react';

const AdvertisedItems = () => {
    return (
        <section className='my-4'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="card lg:card-side bg-primary-content shadow-xl w-full">
                        <figure><img className='w-full h-60 lg:h-full' src="https://placeimg.com/400/400/arch" alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="card lg:card-side bg-primary-content shadow-xl w-full">
                        <figure><img className='w-full h-60 lg:h-full' src="https://placeimg.com/400/400/arch" alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="card lg:card-side bg-primary-content shadow-xl w-full">
                        <figure><img className='w-full h-60 lg:h-full' src="https://placeimg.com/400/400/arch" alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvertisedItems;