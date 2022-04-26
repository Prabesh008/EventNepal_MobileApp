import React from "react";
import { useContext } from "react";

export const UserData = async (token) => {
  try {
    const response = await fetch("http://192.168.0.6:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const data = await response.json();
    return data;
  } catch {
    console.log("couldn't fetch the data again");
  }
};
