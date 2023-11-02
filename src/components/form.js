import React, { Component } from "react";
import MediaGallery from "./mediagallery";
import QuoteSlideshow from "./quotes";
import Heading from "./heading";
import NGOInfoSection from "./info";
import images from "./images"; // Import the images array

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="Container py-6 bg-white">
          <Heading />
        </div>
        <MediaGallery images={images} /> {/* Pass the imported images array */}
        {/* <div className="Container py-6 bg-gradient-to-br from-blue-300 via-teal-400 to-green-300">
          <QuoteSlideshow />
        </div> */}
        <div className="Container py-6 bg-white">
          <NGOInfoSection />
        </div>
      </div>
    );
  }
}
