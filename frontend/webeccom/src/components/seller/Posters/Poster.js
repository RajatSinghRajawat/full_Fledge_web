import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Poster = () => {
    const [Posters, setPosters] = useState([]);

    const getPoster = () => {
        try {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            fetch("http://localhost:5000/getPoster", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.poster, "*****************************");
                    setPosters(result.poster);
                })
                .catch((error) => console.error(error));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPoster();
    }, []);

    return (
        <div className="bg-blue-200 h-auto lg:h-[90vh] p-6 flex justify-center">
            <Carousel  autoPlay 
    infiniteLoop 
    showThumbs={false} 
    showStatus={false} 
    interval={1500} // Change images every 1.5 seconds
    transitionTime={500}>
                {Posters?.map((poster, index) => (
                    <div key={index} className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <div className="lg:m-24 m-8 flex flex-col justify-center">
                            <div className="mb-4">
                                <button className="bg-gradient-to-r from-indigo-800 to-blue-600 text-white rounded-sm px-4 py-2 shadow-lg">
                                    Weekend Discount
                                </button>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                                    {poster.title}
                                </h1>
                            </div>
                            <div className="mb-6">
                                <p className="text-base lg:text-lg font-medium text-gray-800">
                                    {poster.description}
                                    <br />
                                    We have prepaid special discounts for you on grocery products. <br />
                                    Don't miss this opportunity!
                                </p>
                            </div>
                            <div className="flex items-center mt-4 space-x-4">
                                <button type="button" className="btn btn-info">
                                    Shop Now
                                </button>
                                <h2 className="text-2xl font-bold text-green-600">$21</h2>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src={`http://localhost:5000/${poster.image[0]}`}
                                alt="Discount Products"
                                className="max-w-full h-auto object-cover rounded-md shadow-lg"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Poster;
