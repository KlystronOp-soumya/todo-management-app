import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";

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
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;