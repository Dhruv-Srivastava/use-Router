import { useContext } from "react";
import { BrowserContext } from "../context/BroswerContext";

export function useNavigate() {
  const { setCurrentURL } = useContext(BrowserContext);

  return navigate;
  function navigate(path) {
    // Check if path exists or not
    if (path == undefined) {
      throw new Error("path is a mandatory prop and can't be undefined");
    }

    // Check if path is not a string
    if (typeof path !== "string") {
      throw new Error(
        `path prop can only be a string but given ${typeof path}`
      );
    }

    window.history.pushState(null, "", path);
    setCurrentURL(new URL(window.location.href));
  }
}
