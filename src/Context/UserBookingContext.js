import React from "react";
import { useState, useEffect, createContext } from "react";

//defining context

export const UserBookingContext = createContext();

function UserBookingContextProvider(props) {
  const [booking, setBooking] = useState([]);

  // Get all User Bookings
  const getBooking = async () => {
    // API Call
    try {
      const response = await fetch(
        "http://192.168.0.5:5000/api/event/fetchallevents",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setEvents(json);
      // console.log(
      //   "*****************************************************************"
      // );
      // console.log(events);
    } catch {
      console.log("Couldn't fetch the event list");
    }
  };
}
