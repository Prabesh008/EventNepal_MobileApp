import React from "react";
import { useState, useEffect, createContext } from "react";

//defining context

export const EventContext = createContext();

function EventContextProvider(props) {
  const [events, setEvents] = useState([]);

  // Get all Events
  const getEvents = async () => {
    // API Call
    try {
      const response = await fetch(
        "http://192.168.0.4:5000/api/event/fetchallevents",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setEvents(json);
      console.log(
        "*****************************************************************"
      );
      console.log(events);
    } catch {
      console.log("Couldn't fetch the event list");
    }
  };

  const value = { events, getEvents };

  return (
    <EventContext.Provider value={value}>
      {props.children}
    </EventContext.Provider>
  );
}

export default EventContextProvider;
