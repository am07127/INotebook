import React from "react";

const memberinfo = ({ name, bio, image }) => {
  return (
    <div className="flex flex-col items-center mt-4 bg-gradient-to-br from-blue-300 via-teal-400 to-green-300 rounded shadow-lg py-14">
      <img
        src="/PICTURES/WAJEEHA 1.jpg"
        alt={name}
        className="w-32 h-32 rounded-full mt-6 border-4 border-white"
      />
      <h2 className="text-2xl font-bold mt-4">Wajeeha Farooqi</h2>
      <p className="leading-relaxed text-lg-gray-600 text-center px-4 py-2">
        Wajeeha Farooqi completed her Pharm-D degree from Jinnah Medical and
        Dental College, Karachi in the year 2012. Worked at Linz Pharmaceuticals
        as a Quality Assurance officer from where she also received training in
        Good Documentation Practices (GDP). She has conducted research on
        medicine usage from PCSIR laboratories. Later she completed a training
        session on conducting and documenting surveys. Wajeeha worked as a
        Project Coordinator with Sustainable Initiatives on projects related
        with the theme of climate change and on health, community gardening and
        environmental art. During these projects, she provided training to
        stakeholders on Resource Efficient Urban Growth and Renewable Energy,
        and on Entrepreneurship and development of Social Action plans (SAP)
        Main target audience being the youth of underdeveloped areas. In
        collaboration with the NGO Health Initiatives (Agha Khan University
        Hospital), has assisted in organizing and supervising free medical camps
        in various schools of underdeveloped areas. Wajeeha has provided
        community based training in various underdeveloped areas on health
        awareness and youth volunteerism. She also has experience of working as
        a Marketing Coordinator in Sindh Trading Company.
      </p>
    </div>
  );
};

export default memberinfo;
