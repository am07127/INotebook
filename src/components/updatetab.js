import { useContext, useState, useEffect } from 'react';
import DonationContext from '../context/DonationContext';

function Updatetab() {
    const context = useContext(DonationContext);
    const { donations, updateCase, GetDonations, deleteCase } = context;
    const [selected, setSelected] = useState('');
    const [fundsTotal, setFundsTotal] = useState(0);
    const [fundsCollected, setFundsCollected] = useState(0);

    useEffect(() => {
        GetDonations();
    }, []);

    function handleSelection(selected) {
        // Get full object from selected name
        const item = donations.find((d) => d.name === selected);
        updateCase(item._id, fundsTotal, fundsCollected);
    }

    function handleDelete(selected) {
        const item = donations.find((d) => d.name === selected);
        deleteCase(item._id);
    }

    return (
        <div className="flex items-center space-x-4">
            <select
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                <option value="" disabled>Select an option</option>
                {donations.map((item) => (
                    <option key={item._id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>

            <input
                type="number"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Funds Total"
                value={fundsTotal}
                onChange={(e) => setFundsTotal(e.target.value)}
            />

            <input
                type="number"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Funds Collected"
                value={fundsCollected}
                onChange={(e) => setFundsCollected(e.target.value)}
            />

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                onClick={() => handleSelection(selected)}
            >
                Submit
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                onClick={() => handleDelete(selected)}
            >
                Delete
            </button>
        </div>
    );
}

export default Updatetab;
