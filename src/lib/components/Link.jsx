import { useNavigate } from "../hooks/use-navigate";

export default function Link({ children, to }) {
  const navigate = useNavigate();

  function handleNavigation(e) {
    e.preventDefault();
    navigate(to);
  }

  // Check if path exists or not
  if(to == undefined){
    throw new Error("to is a mandatory prop and can't be undefined")
 }

 // Check if path is not a string
 if(typeof to !== "string"){
   throw new Error(`to prop can only be a string but given ${typeof to}`)
 }

  return <a onClick={handleNavigation}>{children}</a>;
}
