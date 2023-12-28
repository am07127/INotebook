import React, { useState } from 'react'

const Storytab = () => {

    const host = "https://mhmk-backend.onrender.com"

    const [Image, setImage] = useState({ title: "", description: "", name: "", image: "", video:"" })

    const addImage = async (title, description, name, imageFile, url) => {
        console.log("addImage called");
        console.log(title, description, name, imageFile, url);
    
        // Create FormData object
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('name', name);
        formData.append('image', imageFile); // Make sure imageFile is a File object
        formData.append('url', url);
    
        // API Call
        try {
            const response = await fetch(`${host}/api/stories/addstory`, {
                method: 'POST',
                body: formData // Pass formData instead of JSON
                // Note: 'Content-Type' header is not set; it's handled automatically
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const story = await response.json();
            console.log(story);
            alert("Story Added");
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
    

    const handleClick = (e) => {
        e.preventDefault();
        console.log("clicked");
        addImage(Image.title, Image.description, Image.name, Image.image, Image.video);
    }

    const onChange = (e) => {
        setImage({ ...Image, [e.target.name]: e.target.value })
    }

    const handlefileChange = (e) => {
        setImage({
            ...Image,
            image: e.target.files[0]
        })
    }

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold">Add Story</h2>
            <form className="mt-3">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="title" name="title" aria-describedby="emailHelp" value={Image.title} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="description" name="description" value={Image.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="name" name="name" value={Image.name} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                    <input type="file" accept=".jpeg, .jpg, .png" className="mt-1 block w-full" id="image" name="image" onChange={handlefileChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="video" className="block text-sm font-medium text-gray-700">Video</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="video" name="video" value={Image.video} onChange={onChange} minLength={5} required />
                </div>
                
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={handleClick}>Add Story</button>
            </form>
        </div>
    )
}

export default Storytab;
