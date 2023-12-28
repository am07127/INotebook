import React, { useState, useEffect } from "react";
import Card from "./card";
import Spinner from "./spinner.js"

const Stories = () => {
    const [Story, setStory] = useState([]);
    const [loading, setLoading] = useState(true);

    const host = "https://mhmk-backend.onrender.com"; // Replace with your server's address if different

    const GetStories = async () => {
        console.log("getStories called");
        try {
            const response = await fetch(`${host}/api/stories/getstories`, {
                mode: 'no-cors',
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const stories = await response.json();
            console.log(stories);
            setStory(stories);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };

    

    
    // Fetch stories when component mounts
    useEffect(() => {
        GetStories();
    }, []); // The empty array ensures this effect runs only once on component mount

    return (
        loading ? <Spinner /> :
        <div className="bg-white">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        {Story.map((item) => {
                            return (
                                <Card
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    name={item.name}
                                    key={item._id}
                                    video={item.url}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stories;
