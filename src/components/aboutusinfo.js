import React, { Component } from "react";

export default class aboutusinfo extends Component {
  render() {
    return (
      <div>
        <div class="flex justify-center">
          <div class="flex flex-col max-w-7xl justify-center items-center">
            <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
              <div class="h-26 w-full overflow-hidden flex">
                {" "}
                <img
                  src="PICTURES/BASKET.png" 
                  alt=""
                  class=""
                />{" "}
              </div>
              <div class="grid p-2">
                <div class="font-bold text-lg text-black m-3 mt-10">
                  Building Knowledge and Skills{" "}
                </div>
                <div class="text-gray-500 m-4 text-sm">
                  <a>
                    Our team will collaborate with knowledge and skill based
                    individuals and organizations around a diversified basket of
                    knowledge and skill sets for training people belonging to
                    less privileged, low income households and communities. Aim
                    is to empower them for better living through gainful income
                    generation – benefits we feel are not just financial, but
                    also social and societal through improved access to quality
                    education and healthcare and avoidance of engaging in
                    non-productive, unhealthy life pursuits
                  </a>
                </div>
              </div>
            </div>
            <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
              <div class="grid p-2">
                <div class="font-bold text-lg text-black m-2 mt-10">
                  Access to Employment and Entrepreneurship{" "}
                </div>
                <div class="text-gray-500 m-1 text-sm">
                  <a >
                    Knowledge enhancement and skills development would follow by
                    assisting communities in accessing gainful employment or on
                    treading the path of entrepreneurship. Here again, our team
                    of Mera Hunar Mera Kaam would collaborate with individuals
                    and organizations that could act as employers or as
                    facilitators in setting up businesses{" "}
                  </a>
                </div>
              </div>
              <div class="h-26 w-full overflow-hidden">
                {" "}
                <a href="https://www.pexels.com/@anntarazevich/" target="_blank" rel="noopener noreferrer">
                <img
                  src="PICTURES/pexels-anna.jpg"
                  alt=""
                  class=""
                />{" "}
                </a>
              </div>
            </div>
            <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
              <div class="h-26 w-full overflow-hidden">
                {" "}
                <a href="https://www.pexels.com/@cottonbro/" target="_blank" rel="noopener noreferrer">
                <img
                  src="PICTURES/pexels-cottonbro-studio.jpg"
                  alt=""
                  href="www.pexels.com/@cottonbro/"
                  class="max-h-60 w-full object-cover"
                />{" "}
                </a>
                
              </div>
              <div class="grid p-2">
                <div class="font-bold text-lg text-black m-1 mt-12">
                  Supporting Social Causes{" "}
                </div>
                <div class="text-gray-500 m-4 text-sm">
                  <a >
                    Another area of our work would involve supporting existing
                    social causes where we have made a beginning by setting up a
                    Book Bank – collecting books from people willing to donate,
                    or buying from low budget vendors and then distributing them
                    in schools run for low income communities{" "}
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
