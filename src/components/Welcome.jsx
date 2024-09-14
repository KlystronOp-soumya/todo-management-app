import { useContext } from "react";
import { useParams , Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Welcome = () =>{

    const {userName} = useParams() ;
    const auth = useContext(AuthContext) ;
    console.log(auth.number)
    return(
        <div className="welcomeContainer">
            <h3>Welcome {userName}</h3>
            <h4>Manage your todos - </h4> <Link to="/todos"> Go Here </Link> 
        </div>

    )
}

export default Welcome ;