import { createContext,useState } from "react"
const contextContent = createContext();

const cartProvider = ({children})=>{
const [cart,setCart] = useState(0)

let cartUpDate = () =>{
setCart(cart++)
}
return (
    <contextContent.Provider value={{cart,cartUpDate}}>
        {children}
    </contextContent.Provider>
)
}
export  {cartProvider,createContext}
