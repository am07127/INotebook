
import React, { useState } from 'react';
import StoryTab from './storytab.js';
import CaseTab from './casetab.js';
import Updatetab from './updatetab.js'; // Add import for Updatetab component
import UpdateStory from './updatestory.js';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('story');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-center items-center h-16 bg-blue-500">
                <button
                    className={`px-4 py-2 rounded-md ${
                        activeTab === 'story' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-gray-200'
                    }`}
                    onClick={() => handleTabChange('story')}
                >
                    Story
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${
                        activeTab === 'case' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-gray-200'
                    }`}
                    onClick={() => handleTabChange('case')}
                >
                    Case
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${
                        activeTab === 'update' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-gray-200'
                    }`}
                    onClick={() => handleTabChange('update')}
                >
                    Update Case
                </button>
                <button className={`px-4 py-2 rounded-md ${
                        activeTab === 'updatestory' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-gray-200'
                    }`}
                    onClick={() => handleTabChange('updatestory')}>
                    Update Story
                </button>
            </div>
            <div className="p-4">
                {activeTab === 'story' ? <StoryTab /> : activeTab === 'case' ? <CaseTab /> : activeTab === 'updatestory' ? <UpdateStory/> : <Updatetab/> } {/* Add condition for rendering Updatetab */}
            </div>
        </div>
    );
};

export default Dashboard;