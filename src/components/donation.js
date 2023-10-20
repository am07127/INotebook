import React from "react";
import Combobox from "./combobox";
import Accordion from "./accordion";
const cardData = [
  {
    id: 1,
    name: "Kubra",
    collected: 2000,
    total: 5000,
  },
  {
    id: 2,
    name: "Aiza",
    collected: 3500,
    total: 5000,
  },
  {
    id: 3,
    name: "Areeb",
    collected: 1200,
    total: 5000,
  },
  {
    id: 4,
    name: "Seema",
    collected: 4000,
    total: 5000,
  }
];

const DonationPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-green-300 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardData.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-lg shadow-lg p-4 transition duration-300 transform hover:scale-105"
            >
              <img
                src={`https://via.placeholder.com/150?text=${person.name}`}
                alt={person.name}
                className="w-full h-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4">{person.name}</h3>
              <div className="flex justify-between mt-2">
                <p>Funds Collected:</p>
                <p>${person.collected}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Funds Remaining:</p>
                <p>${person.total - person.collected}</p>
              </div>
              
              <div className="mt-4">
                <div className="bg-gray-300 h-4 rounded-full">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{
                      width: `${(person.collected / person.total) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <Accordion/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-white p-8 rounded-md shadow-md w-96"
        style={{ margin: "50px" }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Make a Donation, Change a life
        </h2>
        <p className="text-gray-600 mb-6">
          Please consider making a donation to support our cause.
        </p>
        <div className="mb-6">
          <strong className="block mb-2">Account Details:</strong>
          <p>Habib Metropolitan Bank</p>
          <p>Account Number: 1234567890</p>
          <p>Routing Number: 9876543210</p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2 text-gray-700">
              Donation Amount
            </label>
            <input
              type="number"
              id="amount"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="file" className="block mb-2 text-gray-700">
              Receipt
            </label>
            <input
              type="file"
              id="file"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="combobox" className="block mb-2 text-gray-700">
              Choose the intended recepient:
            </label>
            <Combobox />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
