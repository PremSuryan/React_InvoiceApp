// import { useState, createContext } from "react";
// import LoginPage from "../components/loginpage";
// import Register from "../components/loginpage";


import { createContext, useState, useContext} from 'react';

const initalData = {
  username:'',
  userPhoneno:'',
  userAddress:'',
  userEmailID:'',
  userCity:'',
  userCountry:'',
  password:''
}
const LoginContext = createContext(initalData);


export const LoginProvider = ({children}) => {

  // const [userregister, setUserRegister] = useState(false);
  const [userData, setuserData] = useState(initalData);
//  const Userlogin = ()=>{
//   setUserRegister(false);
//  }

//  const Userregs = () =>{
//   setUserRegister(true);
//  }

  return (
    <LoginContext.Provider value={{ userData, setuserData }}>
      {children}
    </LoginContext.Provider>
  );
};


export const useData = () => {
  return useContext(LoginContext);
} 

export default useData;





// export const useData = () => useContext(LoginContext);
// export const LoginContext = createContext(null);

// export const LoginProvider = ({children}) => {

//     const [userregister, setUserRegister] = useState(false);
    

//     return ( 
//     <div>
//         <LoginContext.Provider value ={{userregister,setUserRegister,userData, setuserData}}>
//             {children}
//             {/* <LoginPage /> */}
//             {/* <Register /> */}
//         </LoginContext.Provider>
//     </div>
//     );
// }

// export default LoginProvider;

// export default Register;

// export default LoginPage = () => {
//     userID: string;
//     userName: string;
//     userPhonenumber: number;
//     userEmail: string;
// };



// const registerData = async (invoice: any, isDraft: boolean) => {
//     let addUrl = url + "add";
//     if (isDraft) {
//       invoice = { ...invoice, status: "draft" };
//     }
//     try {
//       const response = await axios.post(addUrl, invoice);
//       console.log(response);
//     //   dispatch({ type: "ADD_INVOICE_COMPLETED", payload: invoice });
//       dispatch({ type: "REGISTER_DATA_MODAL" });

//     } catch (error) {
//       console.log(error);
//     }
//   };

///----------------------
//// import axios from 'axios';

// Define context
// const MongoDBContext = createContext();
// export const LoginContext = createContext("");


// Define initial state
// const initialState = {
//   users: [],
//   loading: false,
//   error: null,
// };

// // Define action types
// const ActionTypes = {
//   FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
//   FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
//   FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE',
//   // Add more action types as needed
// };

// // Define reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ActionTypes.FETCH_USERS_REQUEST:
//       return { ...state, loading: true };
//     case ActionTypes.FETCH_USERS_SUCCESS:
//       return { ...state, loading: false, users: action.payload, error: null };
//     case ActionTypes.FETCH_USERS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     // Add cases for other action types
//     default:
//       return state;
//   }
// };

// Define custom hook to use context
// export const useMongoDB = () => useContext(MongoDBContext);



 // const [state, dispatch] = useReducer(reducer, initialState);  state, fetchUsers

  // const { userData, setuserData } = useState({
  //     username:'',
  //     userPhoneno:'',
  //     userAddress:'',
  //     userEmailID:'',
  //     userCity:'',
  //     userCountry:''
  //     // Other user data...
  //   });
// Define MongoDBProvider component
// export const MongoDBProvider = ({ children }) => {

  // Define actions
  // const fetchUsers = async () => {
  //   dispatch({ type: ActionTypes.FETCH_USERS_REQUEST });
    // try {
    //   const response = await axios.get('/api/users'); // Example API endpoint
    //   dispatch({ type: ActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    // } catch (error) {
    //   dispatch({ type: ActionTypes.FETCH_USERS_FAILURE, payload: error.message });
    // }
  // };

  // You can define more actions for other MongoDB operations

  // Provide state and actions to children --------    userData, setuserData

  // export const useData = () => useContext(LoginProvider);


