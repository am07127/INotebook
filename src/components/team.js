import React, { Component } from "react";
import TeamData from "./teamdata";

export default class team extends Component {
  render() {
    return (
      <div>
        <div className="flex items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
            <div className="flex flex-col p-2 m-2 max-w-7xl">
              <div className="text-xl md:text-3xl font-medium py-8">
                Meet Our Team
              </div>

              <div className="flex items-center justify-center lg:flex-row flex-col space-x-4 space-y-4 p-2">
                {TeamData.map((person) => {
                  return (
                    <div
                      className="flex-col px-6 py-2 w-[90%] md:w-[50%] lg:w-1/4"
                      key={person.id}
                    >
                      <div className="h-40 w-40 border-2 border-yellow-400 rounded-full overflow-hidden bg-gray-200">
                        <img src={person.image} alt="" className="" />
                      </div>

                      <div className="text-md text-white cursor-pointer w-[50%] bg-yellow-400 lg:rotate-90 mr-40 mt-8 lg:mb-16 pr-4 pl-1 py-1">
                        Designer
                      </div>
                      <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                        {person.name}
                      </div>
                      <div className="text-left m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem deserunt, dolorum illo consequatur, natus
                        aut, esse dignissimos rem facilis ipsa numquam
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        <div className="text-xl md:text-3xl font-medium py-8">
          Our Mission Statement
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col max-w-7xl justify-center items-center">
            <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
              <div className="h-26 w-full overflow-hidden">
                {" "}
                <img
                  src="https://source.unsplash.com/random/500x400/?knowledge "
                  alt=""
                  className=""
                />{" "}
              </div>
              <div className="grid p-2">
                <div className="font-bold text-lg text-black m-2 mt-10">
                  Building Knowledge and Skills{" "}
                </div>
                <div className="text-gray-500 m-2 text-sm">
                  <a href="">
                    Our team will collaborate with knowledge and skill based
                    individuals and organizations around a diversified basket of
                    knowledge and skill sets for training people belonging to
                    less privileged, low income households and communities. Aim
                    is to empower them for better living through gainful income
                    generation – benefits we feel are not just financial, but
                    also social and societal through improved access to quality
                    education and healthcare and avoidance of engaging in
                    non-productive, unhealthy life pursuits.
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
              <div className="grid p-2">
                <div className="font-bold text-lg text-black m-2 mt-10">
                  Access to Employment and Entrepreneurship{" "}
                </div>
                <div className="text-gray-500 m-2 text-sm">
                  <a href="">
                    Knowledg enhancement and skills development would follow by
                    assisting communities in accessing gainful employment or on
                    treading the path of entrepreneurship. Here again, our team
                    of Mera Hunar Mera Kaam would collaborate with individuals
                    and organizations that could act as employers or as
                    facilitators in setting up businesses. <br></br>Financial
                    Support – When it comes to setting up of businesses – we
                    would provide financial support after careful assessment and
                    validation of the business plan.{" "}
                  </a>
                </div>
              </div>
              <div className="h-26 w-full overflow-hidden">
                {" "}
                <img
                  src="https://source.unsplash.com/random/500x400/?entrepreneurship "
                  alt=""
                  className=""
                />{" "}
              </div>
            </div>
            <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
              <div className="h-26 w-full overflow-hidden">
                {" "}
                <img
                  src="https://source.unsplash.com/random/500x400/?books "
                  alt=""
                  className=""
                />{" "}
              </div>
              <div className="grid p-2">
                <div className="font-bold text-lg text-black m-2 mt-10">
                  Supporting Social Causes{" "}
                </div>
                <div className="text-gray-500 m-2 text-sm">
                  <a href="">
                    Another area of our work would involve supporting existing
                    social causes where we have made a beginning by setting up a
                    <strong> Book Bank </strong>– collecting books from people
                    willing to donate, or buying from low budget vendors and
                    then distributing them in schools run for low income
                    communities.{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
      </div>
    );
  }
}
