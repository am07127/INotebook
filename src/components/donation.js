import React from "react";
// import Combobox from "./combobox";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import DonationContext from "../context/DonationContext";

const DonationPage = () => {
  const context = useContext(DonationContext);
  const { GetDonations, donations } = context;


  // Use the calculated number of columns in your className
  const [openAccordion, setOpenAccordion] = useState(null);
  // Creating Modal for Kubra description
  const [showAlert, setShowAlert] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [openedmodal, setOpenedmodal] = useState(null);

  useEffect(() => {
    setTimeout(() => {setShowAlert(false)}, 30000);
    GetDonations();
  }, []);

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
    setSelectedPerson(donations.find((person) => person._id === personId));
    setOpenedmodal(personId);
  };


  const convertBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  };

  return (
    <>
      {showAlert && (<div
        className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span className="font-medium">Make a donation, change a life.</span> Even a small contribution goes a long way in helping us reach our goal. Donate now!
      </div>)}
      <div className="bg-white">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              {donations.map((person) => {
                const remainingAmount = person.total - person.collected;
                const progressPercentage =
                  (person.collected / person.total) * 100;
                  const isModalOpen = openedmodal === person._id;

                return (
                  <div className="p-4 md:w-1/3 transition duration-300 transform hover:scale-105">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" style={{backgroundColor:"#f3f4f6"}}>
                      <img
                        className="lg:h-64 lg:w-full md:h-46 w-full object-cover object-center"
                        src={`data:${
                          person.image.contentType
                        };base64,${convertBufferToBase64(
                          person.image.data.data
                        )}`}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-1">
                          {person.name}
                        </h1>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-center mt-1">
                          <p className="text-gray-500">
                            Funds Collected: Rs.{person.collected}
                          </p>
                        </div>
                        <div className="flex justify-center mt-4 mb-6">
                          <p className="text-gray-500">
                            Funds Remaining: Rs. {remainingAmount}
                          </p>
                        </div>
                        <div className="relative w-full h-2 bg-gray-200 rounded-full mt-6">
                          <div
                            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="p-6">
                        <button
                          className="mt-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-full inline-block focus:outline-none"
                          onClick={() => handleAccordionClick(person._id)}
                        >
                          Read More
                        </button>
                      </div>
                      {isModalOpen &&
                        Modal({
                          person: selectedPerson,
                          onClose: () => setOpenedmodal(null),
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="container bg-blue-400 rounded-lg px-6 py-8 max-w-md mx-auto text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          Donate to our Cause
        </h2>

        <p className="text-gray-100">
          <strong>
            Your contribution can make a difference! Please consider donating.
          </strong>
        </p>
        <p className="text-gray-100">Habib Metropolitan Bank</p>
        <p className="text-gray-100">
          <strong>Account Number:</strong> 6018120311714144371
        </p>
        <p className="text-gray-100">
          <strong>IBAN Number: </strong>PK55 MPBL 0181 0271 4014 4371
        </p>
        <p className="text-gray-100">
          <strong>Account Title: </strong>Urban Collaborative
        </p>
        <p className="text-gray-100">
          (Parent organization of Mera Hunar Mera Kaam)
        </p>

        <a
          href="https://forms.gle/qKVhQ5A75tQxHQDP8"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-indigo-500 mt-8 rounded-full py-4 px-8 inline-block font-medium hover:bg-indigo-600 hover:text-white transition duration-200"
        >
          Donate Now
        </a>
      </div>
    </>
  );
};

export default DonationPage;
