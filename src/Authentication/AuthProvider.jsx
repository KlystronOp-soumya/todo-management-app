import { createContext, useContext, useState } from "react";
//import { AuthContext } from "../Context/AuthContext";

// add the AuthContext and create a hook
//1. Create context
export const AuthContext = createContext() ;
//2.create a hook
export const useAuth = () => useContext(AuthContext) ;

const AuthProvider = ({children}) => {

    const [number , setNumber] = useState(1) ;
    
    //to check if the AuthContext is updating
    function updateNumber()
    {
        setNumber(number+10) ;
    }

    setInterval(updateNumber, 10000);
    
    return(
        <AuthContext.Provider value={ {number}  }>
            {children} {/* Passesd down to the children */}
        </AuthContext.Provider>
    )

}

export default AuthProvider;