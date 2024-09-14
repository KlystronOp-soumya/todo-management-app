import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const AuthProvider = ({children}) => {

    const [number , setNumber] = useState(0) ;

    return(
        <AuthContext.Provider value={ {number}  }>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;