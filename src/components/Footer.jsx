import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Footer = () => {

  //add the Auth context here
  const authContext  = useContext(AuthContext) ;
  console.log(`Foother component - ${authContext.number}`) ;
  
  return (
    <footer className="footer">
      <div className="container">
        Footer
      </div>
    </footer>
  )
};

export default Footer;