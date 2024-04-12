import React from "react";
import { useState } from "react";
import LoginPage from "../components/loginpage";
import Register from "../components/loginpage";

// export default LoginPage = () => {
//     userID: string;
//     userName: string;
//     userPhonenumber: number;
//     userEmail: string;
// };

export const LoginContext = React.createContext();

export const LoginProvider = () => {

const [ userregister ] = useState(false);
    return ( 
    
    <LoginContext.Provider >
        <LoginPage value ={userregister} />
        <Register value ={userregister} />
    </LoginContext.Provider>

    );
}

export default LoginContext
