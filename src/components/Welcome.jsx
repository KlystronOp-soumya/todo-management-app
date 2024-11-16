import { useContext } from "react";
import { useParams , Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useAuth } from "../Authentication/AuthProvider";

const Welcome = () =>{

    const {userName} = useParams() ; //to use the RequestParams
    /*
    //dont use the below code anymore
    const auth = useContext(AuthContext) ;
    console.log(auth.number)
    */
    //use the hook
    const authContext = useAuth() ;
    console.log(authContext.number) ;
    return(
        <div className="welcomeContainer">
            <h3>Welcome {userName}</h3>
            <h4>Manage your todos - </h4> <Link to="/todos"> Go Here </Link> 
        </div>

    )
}

export default Welcome ;