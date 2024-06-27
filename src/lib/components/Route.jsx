import React, { useContext } from "react";
import { BrowserContext } from "../context/BroswerContext";

export default function Route({ children, path }) {
  const { currentURL } = useContext(BrowserContext);

  // Check if path exists or not
  if(path == undefined){
     throw new Error("path is a mandatory prop and can't be undefined")
  }

  // Check if path is not a string

  if(typeof path !== "string"){
    throw new Error(`path prop can only be a string but given ${typeof path}`)
  }

  // Render the children of Route component if the current path of the URL is matched with the path passed as a prop
  return currentURL.pathname === path ? children : null;
}
