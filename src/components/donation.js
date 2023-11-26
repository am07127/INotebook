import React from "react";
// import Combobox from "./combobox";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    name: "Kubra",
    collected: 0,
    total: 180000,
    image: "/PICTURES/KUBRA.jpg",
    description:
      "An aspiring beautician and mother of three, Kubra is looking forward to pursue her passion by setting up a home studio for which she needs your assistance \n. She left her home 7 years ago due to personal challenges. Now, to pursue her passion, and to contribute to her family’s income, she is looking forward to set up a home studio. \n The costs will include purcease of beauty care products, parlor furniture, and other equipment.\n Kubra connected with our team that did a thorough evaluation to come up with a viable and sustainable business proposition.",
  },
  // {
  //   id: 2,
  //   name: "Jashwanti",
  //   collected: 3500,
  //   total: 5000,
  //   image: "/PICTURES/JASHWANTI.jpg",
  // },
  // {
  //   id: 3,
  //   name: "Pargatti",
  //   collected: 1200,
  //   total: 5000,
  //   image: "/PICTURES/PARGATTI.jpg",
  // },
  // {
  //   id: 4,
  //   name: "Rajeeb",
  //   collected: 4000,
  //   total: 5000,
  //   image: "/PICTURES/RAJEEB.jpg",
  // },
];

const DonationPage = () => {
  const numberOfColumns = Math.min(cardData.length, 5); // Let's say maximum 4 columns for large screens

  // Use the calculated number of columns in your className
  const gridClass = `grid grid-cols-1 md:grid-cols-${numberOfColumns} gap-4`;
  const [openAccordion, setOpenAccordion] = useState(null);
  // Creating Modal for Kubra description
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // in line Modal function within DonationPage
  const Modal = ({ person, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 max-w-full max-h-full overflow-y-auto ">
        {/* Modal content, including the long description */}
        <h2 className="text-xl font-semibold mb-4">{person.name}</h2>
        <p className="text-lg text-gray-800 font-serif">{person.description}</p>
  
        {/* Close button */}
        <button
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-full inline-block focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );

  const handleAccordionClick = (personId) => {
    // If the clicked accordion is already open, close it. Otherwise, open it.
    setOpenAccordion((prevOpenAccordion) =>
      prevOpenAccordion === personId ? null : personId
    );
    setSelectedPerson(cardData.find((person) => person.id === personId));
    setIsModalOpen(true);

  };
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl md:text-5xl px-8 text-black font-bold text-blue-700 font-cursive body-font">
        Make a Donation, Change a Life
      </h1>
      {/* <div className="container mx-auto mt-10 py-10 flex flex-wrap items-center justify-center"> Made changes here for centering Kubra */}
      <div className="flex flex-wrap justify-center">
        <div className={gridClass}>
          {cardData.map((person) => (
            <div
              key={person.id}
              className="bg-blue-300 rounded-lg shadow-lg p-4 transition duration-300 transform hover:scale-105 m-4 w-96"
            >
              <img
                src={`${person.image}`}
                alt={person.name}
                className="w-full h-full rounded-full object-center"
                style={{ maxHeight: "380px" }}
              />
              <h3 className="text-xl font-semibold mt-4">{person.name}</h3>
              <div className="flex justify-between mt-2">
                <p>Funds Collected:</p>
                <p>Rs. {person.collected}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Funds Remaining:</p>
                <p>Rs. {person.total - person.collected}</p>
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
                <button
                  className="accordion-header bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full inline-block mx-auto mt-4 focus:outline-none text-center"
                  onClick={() => handleAccordionClick(person.id)}

                >
                  Learn About {person.name}
                </button>
              </div>
              {/* {openAccordion === person.id && (
                <div className="accordion-body bg-gray-100 p-4 border-t border-gray-200 py-2">
                  <p className="text-lg text-gray-800 font-serif">
                    {person.description}
                  </p>
                </div>
              )} */}
              {isModalOpen && (
                <Modal
                  person={selectedPerson}
                  onClose={() => setIsModalOpen(false)}
                />
              )}

            </div>
          ))}
        </div>
      </div>
      {/* <div
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
      </div> */}
      <div className="bg-blue-400 rounded-lg px-6 py-8 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Donate to our Cause
        </h2>

        <p className="text-gray-100">
          <strong>
            Your contribution can make a difference! Please consider donating.
          </strong>
        </p>
        <p className="text-gray-100">Habib Metropolitan Bank</p>
        <p className="text-gray-100"><strong>Account Number:</strong> 6018120311714144371</p>
        <p className="text-gray-100"><strong>IBAN Number: </strong>PK55 MPBL 0181 0271 4014 4371</p>
        <p className="text-gray-100"><strong>Account Title: </strong>Urban Collaborative</p>
        <p className="text-gray-100">(Parent organization of Mera Hunar Mera Kaam)</p>

        <a
          href="https://forms.gle/qKVhQ5A75tQxHQDP8"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-indigo-500 mt-8 rounded-full py-4 px-8 inline-block font-medium hover:bg-indigo-600 hover:text-white transition duration-200"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default DonationPage;
