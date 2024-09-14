import { useParams , Link } from "react-router-dom";

const Welcome = () =>{

    const {userName} = useParams() ;

    return(
        <div className="welcomeContainer">
            <h3>Welcome {userName}</h3>
            <h4>Manage your todos - </h4> <Link to="/todos"> Go Here </Link> 
        </div>

    )
}

export default Welcome ;