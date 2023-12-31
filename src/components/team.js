import React from "react";
import TeamData from "./teamdata";
import Advisor from "./advisordata";
import { Link } from "react-router-dom";
import Aboutusinfo from "./aboutusinfo";
import { useContext } from "react";
import PersonContext from "../context/PersonContext";

const Team = () => {
  const context = useContext(PersonContext);
  const { setperson } = context;

  const handleclick = (person) => {
    setperson(person);
  };

  return (
    <>
      <section class="text-gray-600 body-font bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-14">
            <h1 class="text-4xl font-arial font-bold title-font mb-4 text-gray-700 tracking-wider">
              Meet Our Team
            </h1>
            <h2 class="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-900 font-semibold">
              Management Team
            </h2>
          </div>

          <div class="flex flex-wrap -m-4 justify-center">
            {TeamData.map((person) => {
              return (
                console.log(`${person.name}`),
                (
                  <div class="p-4 lg:w-1/2" key={person.id}>
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <Link to="/team/info" onClick={() => handleclick(person)}>
                        <img
                          alt="team"
                          class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                          src={person.image}
                        />
                      </Link>
                      <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-bold text-lg text-gray-900">
                          {person.name}
                        </h2>
                        <h3 class="text-gray-900 font-medium mb-3">
                          {person.title}
                        </h3>
                        {/* <p class="mb-4">{person.info}</p> */}
                        {/* <span class="inline-flex">
                          <a class="text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </a>
                          <a class="ml-2 text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </a>
                          <a class="ml-2 text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                          </a>
                        </span> */}
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          {/* Second Section */}
          <div class="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center justify-center w-full mb-8 mt-12">
              <h1 className="text-4xl font-arial font-bold title-font mb-4 text-gray-700 tracking-wider"></h1>
              <h2 className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-900 font-semibold">
                Advisory Panel
              </h2>
            </div>

            <div className="flex flex-wrap -m-4 justify-center mt-8">
              {/* Add content for the second section here */}

              {Advisor.map((person1) => {
                return (
                  <div class="p-4 lg:w-1/2" key={person1.id}>
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      {/* <Link to="/team/info" onClick={() => handleclick(person1)}>
                        <img
                          alt="team"
                          class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                          src={person1.image}
                        />
                      </Link> */}
                      <Link to="/team/info" onClick={() => handleclick(person1)}>
                      <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-48 h-48 object-center sm:mb-0 mb-4"
                        src={person1.image}
                      />
                      </Link>


                      <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-bold text-lg text-gray-900">
                          {person1.name}
                        </h2>
                        <h3 class="text-gray-900 font-medium mb-3">
                          {person1.title}
                        </h3>

                        {/* <span class="inline-flex">
                          <a class="text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </a>
                          <a class="ml-2 text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </a>
                          <a class="ml-2 text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                          </a>
                        </span> */}
                      </div>
                    </div>
                  </div>
                );
              })} 
            </div>
            {/* End of Second Section */}
            {/* Third Section */}
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-br from-blue-300 via-teal-400 to-green-300 py-10">
        <Aboutusinfo />
      </div>
    </>
  );
};

export default Team;
