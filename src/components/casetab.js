import React, { useState } from 'react'
import { useContext } from 'react';
import DonationContext from '../context/DonationContext';

const Casetab = () => {

    const context = useContext(DonationContext);
    const { AddDonation } = context;

    const [Donation, setDonation] = useState({ name: "", collected: 0, total: 0, image: "", description: "" })
    


    const handleClick = (e) => {
        e.preventDefault();
        console.log("clicked");
        AddDonation(Donation.name, Donation.collected, Donation.total, Donation.image, Donation.description);
    }

    const onChange = (e) => {
        setDonation({ ...Donation, [e.target.name]: e.target.value })
    }

    const handlefileChange = (e) => {
        setDonation({
            ...Donation,
            image: e.target.files[0]
        })
    }

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold">Add Case</h2>
            <form className="mt-3">
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="description" name="description" value={Donation.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="name" name="name" value={Donation.name} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                    <input type="file" accept=".jpeg, .jpg, .png" className="mt-1 block w-full" id="image" name="image" onChange={handlefileChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="collected" className="block text-sm font-medium text-gray-700">Collected</label>
                    <input type="number" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="collected" name="collected" value={Donation.collected} onChange={onChange} required />

                </div>
                <div className="mb-4">
                    <label htmlFor="total" className="block text-sm font-medium text-gray-700">Total</label>
                    <input type="number" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="total" name="total" value={Donation.total} onChange={onChange} required />
                </div>                
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={handleClick}>Add Case</button>
            </form>
        </div>
    )
}

export default Casetab;
