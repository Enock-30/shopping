// 'use client'
// import { useContext,createContext,useState } from "react";

// const authenticateUser = createContext();

// export const AuthProvider =  ({children}) =>{
// const [isAuthenticate,setIsAuthenticate] = useState(false)

// const Login = (email,password) =>{
// const User = {
//     email:'arineitweenock47@gmail.com',
//     password:'Webdev199530?'
// }
// if(email === User.email && password === User.password){
// setIsAuthenticate(true)
// localStorage.setItem("isAuth", "true")
// return true
// }
// return false
// }
// const logout = ()=>{
//     setIsAuthenticate(false)
//     localStorage.removeItem('isAuth')
// }
// return (
//     <authenticateUser.Provider value={{isAuthenticate,Login,logout}}>
//         {children}
//     </authenticateUser.Provider>
// )
// }

// // export const authUser = ()=>useContext(authenticateUser);

