import React, { Component } from "react";
import Card from "./card";

//latest stories
export default class extends Component {
  render() {
    const data = [
      {
        name: "Mahnoor Irshad",
        image: "/PICTURES/mahnoorlatest.jpeg",
        title: "Graphic Designer",
        id: 1,
        description: `A Mathematics Major student from Karachi University successfully completes her Graphic Designing course and starts freelancing`,
        video: "https://www.youtube.com/embed/gYSZmx_0FCo"
      },
      {
        name: "Shahnila Ansari",
        image: "/PICTURES/SHAHNILA.jpg",
        title: "Beautician",
        id: 2,
        description: `Shehnila Ansari, a beautician from Karachi successfully completes her certification course and starts her own salon.`,
        video: "https://www.youtube.com/embed/dO4x-VC78OU"
      }
    ];
    return (
      <div className="bg-white">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              {data.map((item) => {
                return (
                  <Card
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    name={item.name}
                    key={item.id}
                    video={item.video}
                  />
                );
              })}
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
