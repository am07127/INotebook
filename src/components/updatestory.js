import {useState, useEffect} from 'react';


function UpdateStory() {
    const [selected, setSelected] = useState('');
    const [stories, setStory] = useState([]);

    const host = "https://mhmk-backend.onrender.com"; // Replace with your server's address if different

    const GetStories = async () => {
        console.log("getStories called");
        try {
            const response = await fetch(`${host}/api/stories/getstories`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const stories = await response.json();
            console.log(stories);
            setStory(stories);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };

    const deleteStory = async (id) => {
        console.log("deleteStory called");
        try {
            const response = await fetch(`${host}/api/stories/deletestory/${id}`, {
                method: 'DELETE',
                headers: {
                    'auth-token': localStorage.getItem('token')
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const story = await response.json();
            console.log(story);
            alert("Story Deleted");
        } catch (error) {
            console.error('Error deleting story:', error);
        }
    }

    useEffect(() => {
        GetStories();
    }, []);
                    


    function handleDelete(selected) {
        const item = stories.find((d) => d.name === selected);
        deleteStory(item._id);
    }

    return (
        <div className="flex items-center space-x-4">
            <select
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                <option value="" disabled>Select an option</option>
                {stories.map((item) => (
                    <option key={item._id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                onClick={() => handleDelete(selected)}
            >
                Delete
            </button>
        </div>
    );
}

export default UpdateStory;
