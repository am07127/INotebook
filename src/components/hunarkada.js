import React, { Component } from "react";
import Card from "./card";
import Headinghk from "./headinghk";

export default class extends Component {
  render() {
    return (
    <div>
        <div className="Container py-6 bg-white">
          <Headinghk />
        </div>
        <div class="flex justify-center   p-8 ">
            <div class="flex flex-col justify-center">
    
                <div class="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
                    <div class="flex flex-col lg:w-1/2 items-center lg:text-left text-center justify-between  space-y-6 px-8">
                        <div class="flex flex-col items-start space-y-4">
                            <div class="text-1xl md:text-1xl font-normal px-8">
                           <span class="font-bold italic"> Mera Hunar Mera Kaam </span>aims to take its work forward by establishing a physical space where in-house trainers will be providing training in multiple skill sets under one roof. Within the context of the city it will be a unique experiment where not just skills development in vocational learning will be imparted but training courses in digital, language, photography and other skill sets will be organized. 
<br/> <br/>
For now, an online space is being launched where those individuals that receive training facilitated by the funding provided by <span class="italic"> Mera Hunar Mera Kaam </span> will be offering their services to those interested using the platform of <span class="italic">Hunarkada</span>.         </div>
                        </div>
                    </div>
                    <div class="flex lg:w-1/2 items-center justify-center">
                        <div class=" w-96 h-96 lg:h-96  overflow-hidden ">
                            <img src="PICTURES/hunarkadap.png" class="h-full w-full" alt=""/>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
      
    </div>
    );
  }
}
