import React from "react"
import { useState } from "react"

export const LoginContext = React.createContext();

export cons LoginProvider = () => {
 const [ userregister, setUserRegister] = useState(false);
}

return ( 

<LoginContext.Provider value= { userregister, setUserRegister} >
<LoginPage />
<Register />
<LoginContext.Provider>


);

