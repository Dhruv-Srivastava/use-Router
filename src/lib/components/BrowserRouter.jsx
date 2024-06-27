import { useState } from "react";

import { BrowserContext } from "../context/BroswerContext";

export default function BroswerRouter({ children }) {
  /* Note to Self */

  // The purpose of this state is to store the current URL.
 //  We would require to know about path, url params, query strings, so instead of storing currentURL as a string we can store a URL object.
 

  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));
  return (
    <BrowserContext.Provider value={{ currentURL, setCurrentURL }}>
      {children}
    </BrowserContext.Provider>
  );
}
