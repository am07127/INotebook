import React, { Component } from "react";
import MediaGallery from "./mediagallery";
import images from "./images";
import QuoteSlideshow from "./quotes";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center p-8 bg-gradient-to-br from-blue-300 via-teal-400 to-green-300" >
          <div className="flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
              <div className="flex flex-col items-center lg:text-left text-center justify-between space-y-6 px-8">
                <div className="flex flex-col items-start space-y-3">
                  <div className="text-3xl md:text-5xl font-bold px-8">
                    Empowering
                  </div>
                  <div className="text-3xl text-orange-500 md:text-5xl font-bold px-8">
                    Lives
                  </div>
                  <div className="h-1 rounded-2xl w-20 bg-orange-500 ml-10"></div>
                </div>
                <button className="">
                  <ion-icon
                    name="caret-forward-outline"
                    className="mt-2 p-2 bg-orange-500 rounded-full text-3xl text-white border-2 border-orange-500 hover:bg-white hover:text-orange-500"
                  ></ion-icon>
                </button>
              </div>
              <div className="flex space-x-2 md:space-x-6 md:m-4 w-1/2">
                <div className="w-96 h-60 lg:h-96 overflow-hidden" >
                  {/* <img
                    src="https://source.unsplash.com/300x400/?design"
                    className="h-full w-full"
                    alt=""
                  /> */}
                  <MediaGallery images={images}/>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div>
                  <QuoteSlideshow />
                </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
        <div className="flex items-center justify-center">
          <div className="flex-col items-center justify-center text-gray-800 text-center">
            <div className="flex items-center justify-center">
              <div className="h-36 w-[90%] flex items-center justify-center md:text-4xl text-2xl lg:text-5xl font-bold ">
                Our Journey of Hope and Transformation
              </div>
            </div>

            <div className="flex">
              <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                <div className=" w-[70%] md:w-1/2 bg-gray-200 py-10 rounded-2xl flex items-center justify-center ml-4">
                  <div className="flex-col  items-center px-0 md:px-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400  bg-clip-text text-transparent">
                      98%
                    </div>
                    <div className="text-md mt-8 font-bold text-gray-800">
                      Tailblocks has gained 98% users this year
                    </div>
                    <div className="text-xs font-medium text-gray-800">
                      Tailblocks has more than 15k+ visitors per month.
                    </div>
                  </div>
                </div>
                <div className=" w-[70%] md:w-1/2 bg-gray-200 py-10 rounded-2xl flex items-center justify-center ml-4">
                  <div className="flex-col  items-center px-0 md:px-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400  bg-clip-text text-transparent">
                      98%
                    </div>
                    <div className="text-md mt-8 font-bold text-gray-800">
                      Tailblocks has 128% new impressions this year
                    </div>
                    <div className="text-xs font-medium text-gray-800">
                      Tailblocks has more than 15k+ visitors per month.
                    </div>
                  </div>
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
