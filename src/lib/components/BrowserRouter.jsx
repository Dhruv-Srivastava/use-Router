import { useEffect, useState } from "react";

import { BrowserContext } from "../context/BroswerContext";

export default function BroswerRouter({ children }) {
  /* Note to Self */

  // The purpose of this state is to store the current URL.
 //  We would require to know about path, url params, query strings, so instead of storing currentURL as a string we can store a URL object.
  
  // Configure the foward and backward button of the broswer

  useEffect(()=>{
    function handlePopState(e){
      console.log("history changed")
      setCurrentURL(new URL(window.location.href))
    }
    window.addEventListener("popstate", handlePopState)

    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));
  return (
    <BrowserContext.Provider value={{ currentURL, setCurrentURL }}>
      {children}
    </BrowserContext.Provider>
  );
}
