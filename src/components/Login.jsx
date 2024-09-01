import { useState } from "react";
//add navigate hook to navigate to the error page
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    //hook for naviagtion
    const navigate = useNavigate() ;
    //add state for the username
    const [userName , setUserName] = useState('USERNAME') ;
    // add state for the password
    const[userPassword , setUserPassword] = useState('PASSWORD') ;
    // add state for messages
    const [showSuccessMessage , setShowSuccessMessage] = useState(false) ;
    const [showFailureMessage , setShowFailureMessage] = useState(false) ;
    const handleUserNameChange = (event)=>{
        //console.log(event.target.value) ;
        setUserName(event.target.value) ;
    }
    const handleUserPasswordChange =(event) =>{
        //console.log(event.target.value) ;
        setUserPassword(event.target.value) ;
    }
    const handleLogInSubmit = ()=>{
        //console.log(userName) ;
        //console.log(userPassword) ;
        if(userName === '123' && userPassword === '123')
        {
            setShowSuccessMessage(true) ;
            setShowFailureMessage(false) ;
            console.debug("Navigating to welcome") ;
            navigate(`/welcome/${userName}`)
        }
        else
        {
            setShowSuccessMessage(false) ;
            setShowFailureMessage(true) ;
            console.debug("Navigating to error") ;
            navigate("/error");
        }
    }
    return (
        
        <div className="loginContainer">
            {/*
                Alternative
                {showSuccessMessage && <div className="successMessageContainer">
                <span>Login Successful</span>
            </div>}
                {showFailureMessage && <div className="failureMessageContainer">
                <span>Login Failed</span>
            </div>}

             */}
            <div className="messageContainer" id="loginSuccessMessageContainer" >
            <div className="successMessageContainer">
                <span hidden={!showSuccessMessage}>Login Successful</span>
            </div>
            <div className="failureMessageContainer">
                <span hidden={!showFailureMessage}>Login Failed</span>
            </div>
            </div>
            <div className="loginFormContainer">
                <div>
                    <label>User Name</label>
                    <input type="test" name="username" value={userName}  placeholder="Enter User name" onChange={handleUserNameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={userPassword} placeholder="Enter User password" onChange={handleUserPasswordChange}/>
                </div>
                <div>
                    <button type="button" id="login-submit" className="loginButton" onClick={handleLogInSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
