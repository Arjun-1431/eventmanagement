import React from 'react';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../component/booking.css'

export default function Booking() {


  const [user, setUser] = useState({
    fullname:"",
    eventtype: "",
    venue: "",
    place:"",
    guestnumber: "",
    startdate: "",
    enddate: "",
    decoration:"",
    additional:"",
  });
 


  const [eventTypes, setEventTypes] = useState([]);
  const [venues, setVenues] = useState([]);

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleshowDetail= ()=>{
    navigate("/bookdetail")
  }

  const hanldeSumit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:9000/event/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        
      });

      if (response.status === 200) {
        setUser({
          fullname:"",
          eventtype: "",
          venue: "",
          place:"",
          guestnumber: "",
          startdate: "",
          enddate: "",
          decoration:"",
          additional:"",
        });
        alert("Event Booking Successfully !");
        navigate("/home");
      }
      console.log(response);
    } catch (error) {
      console.log("bookevent", error);
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        // Fetch event types from the backend API
        const eventTypesResponse = await fetch('http://localhost:9000/api/event');
        const eventTypesData = await eventTypesResponse.json();
        setEventTypes(eventTypesData);
        console.log("event_Type",eventTypes);

        // Fetch venues from the backend API
        const venuesResponse = await fetch('http://localhost:9000/api/event');
        const venuesData = await venuesResponse.json();
        setVenues(venuesData);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);




  
  return (
    <>
      <div className='photo'>
        <h1 className='first'>Booking Online Now</h1>
        <p>Please fill out this form with the required information</p>
        <form className ="bookform"onSubmit={hanldeSumit} method="post">
         
            <label>
              Full Name</label>
              <input type="text" id="fullname" onChange={handleInput} name="fullname" required />
            
            <br />
            <label>
              Event Type</label>
              <select id="eventtype" onChange={handleInput} name="eventtype" value={user.eventtype}>
              <option value="select">Select</option>
            {eventTypes.map((eventTypes, index) => (
              <option key={index} value={eventTypes.eventtype}>
                {eventTypes.eventType}
              </option>
            ))}
          </select>
            
            <br />
            <label>
              Venue</label>
              <select  id="venue" onChange={handleInput} name="venue" value={user.venue}>
              <option value="select">Select</option>
            {venues.map((venues, index) => (
              <option key={index} value={venues.venue}>
                {venues.venue} 
              </option>


            ))}
          </select>
            
            <br />
            <label>
              Place</label>
              <select name="place" onChange={handleInput} value={user.place}>
                <option value="">(select one)</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Gwalior">Gwalior</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            
            <br />
            <label>
              Guest Number</label>
              <input type="number" id="guestnumber" onChange={handleInput} name="guestnumber" value={user.guestnumber} required />
            
            <br />
            <label>
              Start Date</label>
              <input type="date" id="startdate" onChange={handleInput} name="startdate" value={user.startdate} required />
            
            <br />
            <label>
              End Date</label>
              <input type="date" id="enddate" onChange={handleInput} name="enddate" value={user.enddate} required />
            
         
          
            <label>
              Decoration Type</label>
              <select name="decoration" onChange={handleInput} value={user.decoration}>
                <option value="">(select one)</option>
                <option value="Flower">Flower</option>
                <option value="Balloons">Balloons</option>
                <option value="DJ">DJ</option>
                <option value="Stars">Stars</option>
              </select>
            
            <br />
            <label>
              Additional Requests</label>
              <textarea className="textt" name="additional" rows="5" cols="30" onChange={handleInput} value={user.additional} placeholder="Your message ..."></textarea>
            
         
          <input type="submit" value="Submit"  className="submit-button"/>
        </form>
      </div>
    </>
  );
}
