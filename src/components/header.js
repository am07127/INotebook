// new code
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DonationContext from "../context/DonationContext";

const Header = () => {
    const context = useContext(DonationContext);
    const { isLoggedin, setIsLoggedin } = context;

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedin(false);
        navigate("/");
    };

    return (
      <div>
        <header className="text-gray-600 body-font bg-gradient-to-r from-gray-100 to-green-300">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                src="logo1.jpeg"
                alt="Logo"
                className="w-20 h-20 rounded-full"
              />
              <span className="ml-3 text-2xl">Mera Hunar Mera Kaam</span>
            </Link>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900 font-bold" to="/team">
                About Us
              </Link>
              <Link className="mr-5 hover:text-gray-900 font-bold" to="/">
                Home
              </Link>
              <Link className="mr-5 hover:text-gray-900 font-bold" to="/stories">
                Success Stories
              </Link>
              <Link className="mr-5 hover:text-gray-900 font-bold" to="/donation">
                Make a Donation
              </Link>
              <Link className="mr-5 hover:text-gray-900 font-bold" to="/media">
                Media Gallery
              </Link>
              <Link className="mr-5 hover:text-gray-900 font-bold" to="/hunarkada">
                HunarKada
              </Link>
            </nav>
            {!isLoggedin ? (
            <Link to="/login">
              <button
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                style={{ color: "white", backgroundColor: "dodgerblue" }}
              >
                <b>Login</b>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>) : (<button
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                style={{ color: "white", backgroundColor: "dodgerblue" }}
                onClick={handleLogout}
              >
                <b>Log out</b>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>)}
          </div>
        </header>
      </div>
    );
  }

export default Header;



// old code

// import React, { Component } from "react";
// import {Link} from "react-router-dom";

// export default class extends Component {
//   render() {
//     return (
//       <div>
//         <header className="text-gray-600 body-font bg-gradient-to-r from-blue-300 to-green-300">
//           <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//             <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//               <img
//                 src="logo1.jpeg"
//                 alt="Logo"
//                 className="w-20 h-20  rounded-full"
//               />

//               <span className="ml-3 text-xl">Mera Hunar Mera Kaam</span>
//             </Link>
//             <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//               <Link className="mr-5 hover:text-gray-900" to="/team">About Us</Link>
//               <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
//               <Link className="mr-5 hover:text-gray-900" to="/stories">Success Stories</Link>
//               <Link className="mr-5 hover:text-gray-900" to="/donation">Make a Donation</Link>
//               <Link className="mr-5 hover:text-gray-900" to="/media">Media Gallery</Link>
//               <Link className="mr-5 hover:text-gray-900" to="/hunarkada">HunarKada</Link>
//             </nav>
//             <Link to="/login">
//             <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" style={{color:'white',backgroundColor:'dodgerblue'}}>
//               Login
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 className="w-4 h-4 ml-1"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//               </svg>
//             </button>
//             </Link>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }
