import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
//import { AuthContext } from "../Context/AuthContext";

// add the AuthContext and create a hook
//1. Create context
// export const AuthContext = createContext() ;
//2.create a hook
export const useAuth = () => useContext(AuthContext) ;

const AuthProvider = ({children}) => {

    const [number , setNumber] = useState(1) ;

    const [isAuthenticated , setAuthenticated] = useState(false) ;
    
    //Deprecated
    function updateNumber()
    {
        setNumber(number+10) ;
    }
    //function to handle the login
    
    const login = (username , password) => {
        //logic extracted from Login component
        if(username === '123' && password === '123')
        {
            setAuthenticated(true) ;
            return true ;
        }
        else
        {
            setAuthenticated(false) ;
            return false ;
        }
    }
    //function to handle the logout
    const logout = () => {
        //logic extracted from Login component
        setAuthenticated(false) ;
    }
    //json object creation -- short hand
    const securityContextHolder = {number , isAuthenticated , login , logout} ;
    
    
    return(
        /* 
        <AuthContext.Provider value={ securityContextHolder  }>  
        */
        <AuthContext.Provider value={ securityContextHolder  }>
            {children} {/* Passesd down to the children */}
        </AuthContext.Provider>
    )

}

export default AuthProvider;