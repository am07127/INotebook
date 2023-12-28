import { useState } from "react";
import DonationContext from "./DonationContext";

const DonationState = (props) => {
    const [donations, setDonations] = useState([]);

    const host = "https://mhmk-backend.onrender.com"; 

    const GetDonations = async () => {
        console.log("getDonations called");
        try {
            const response = await fetch(`${host}/api/cases/getcase`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const donations = await response.json();
            console.log(donations);
            setDonations(donations);
        } catch (error) {
            console.error('Error fetching donations:', error);
        }
    }
  
    const AddDonation = async (name, collected, total, image, description) => {
        console.log("addDonation called");
        console.log(name, collected, total, image, description);
    
        // Create FormData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('collected', collected);
        formData.append('total', total);
        formData.append('image', image); // Make sure imageFile is a File object
        formData.append('description', description);
    
        // API Call
        try {
            const response = await fetch(`${host}/api/cases/addcase`, {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('token')
                },
                body: formData // Pass formData instead of JSON
                // Note: 'Content-Type' header is not set; it's handled automatically
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const donation = await response.json();
            console.log(donation);
            alert("Donation Added");
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

    const updateCase = async (id, total, collected) => {
        // API Call 
        const response = await fetch(`${host}/api/cases/updatecase/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("token")
          },
          body: JSON.stringify({total, collected})
        });
        const json = await response.json(); 
    
        console.log(json);
        alert("Donation Updated");
      }

      const deleteCase = async (id) => {
        // API Call 
        const response = await fetch(`${host}/api/cases/deletecase/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("token")
          }
        });
        const json = await response.json(); 
    
        console.log(json);
        alert("Donation Deleted");
      }

  return (
    <DonationContext.Provider value={{ donations, GetDonations, AddDonation, updateCase, deleteCase}}>
      {props.children}
    </DonationContext.Provider>
  );

};

export default DonationState;