import React, { useState } from 'react'

const Poster = () => {
    const [Posters, setPoster] = useState([])

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
                    setPoster(result.poster)
                })
                .catch((error) => console.error(error));

        } catch (error) {

        }
    }

    useState(() => {
        getPoster()
    }, [])


    return (
        <div>


            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 bg-blue-200 h-auto lg:h-[90vh] p-6">
                {
                    Posters?.map((poster) => {
                        console.log(poster, "posterssssss");
                        console.log(poster.image[0], "img url")

                        return (
                            <>
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
                                    {/* <img
                                      
                                        src="https://images.macrumors.com/article-new/2023/10/iPhone-16-Cameras-Feature-1.jpg"
                                       
                                    /> */}
                                    <img
                                        src={`http://localhost:5000/${poster.image[0]}`}
                                        alt="Discount Products"
                                          className="max-w-full h-auto rounded-md shadow-lg"
                                    />
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Poster