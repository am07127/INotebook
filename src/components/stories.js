import React, { Component } from "react";

//latest stories
export default class extends Component {
  render() {
    return (
      <div className="bg-white">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                  <img
                    className="lg:h-64 lg:w-full md:h-46 w-full object-cover object-center"
                    src="PICTURES\mahnoorlatest.jpeg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Graphic Designer
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Mahnoor Irshad
                    </h1>
                    <p className="leading-relaxed mb-3">
                      A Mathematics Major student from Karachi University
                      successfully completes her Graphic Designing course and
                      starts freelancing
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
                  <img
                    className="lg:h-64 md:h-36 w-full object-cover object-center"
                    src="PICTURES/SHAHNILA.jpg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Beautician
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Shehnila Ansari
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Shehnila Ansari, a beautician from Karachi successfully
                      completes her certification course and starts her own
                      salon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingBottom: "20px" }}>
            <iframe
              width="640"
              height="315"
              src="https://www.youtube.com/embed/gYSZmx_0FCo"
              frameBorder="2"
              allowFullScreen
              style={{  paddingBottom: "20px"}}
              title="video"
            ></iframe>
            <iframe
              width="640"
              height="315"
              src="https://www.youtube.com/embed/dO4x-VC78OU"
              frameBorder="2"
              allowFullScreen
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
              title="video1"
            ></iframe>
          </div> */}
        </section>
      </div>
    );
  }
}
