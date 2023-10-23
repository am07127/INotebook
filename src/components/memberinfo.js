import React from "react";
import { useContext } from "react";
import PersonContext from "../context/PersonContext";




const Memberinfo = () => {
  const context = useContext(PersonContext);
  const { myperson } = context;

  return (
    <div className="flex flex-col items-center mt-4 bg-gradient-to-br from-blue-300 via-teal-400 to-green-300 rounded shadow-lg py-14">
      <img
        src={myperson.image}
        alt={myperson.name}
        className="w-32 h-32 rounded-full mt-6 border-4 border-white"
      />
      <h2 className="text-2xl font-bold mt-4">{myperson.name}</h2>
      <p className="leading-relaxed text-lg-gray-600 text-center px-4 py-2">
        {myperson.description}
      </p>
    </div>
  );
};

export default Memberinfo;
