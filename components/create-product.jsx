import { useState } from "react"
const Productslist = ()=>{
 const [product,setProduct] = useState()
 

 const handleSubmit = async(e) =>{
e.preventDefault();
const formData = {
    title,
    price,
    image
 }

try {
    const respo = await fetch('/home',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(formData)
    })
    const data = await respo.json();
    console.log(data);
    
} catch (error) {
   console.log(error);
    
}




 }
 
const createproduct = ()=>{
    return <form className="grid w-150 place-center" onSubmit={handleSubmit} method="POST">
            <label htmlFor="title">enter product image link :</label>
            <input type="url" name="image" value={image}  width={'100%'} height={10} className="border" onChange={(e)=>setProduct(e.target.value )}/>
            <label htmlFor="title">enter product name :</label>
            <input type="text" name="title" value={title}  width={'100%'} height={10} className="border" onChange={(e)=>setProduct(e.target.value )}/>
            <label htmlFor="price">enter product price :</label>
            <input type="number" name="price" value={price}  width={'100%'} height={10} className="border" onChange={(e)=>setProduct(e.target.value )}/>
            <button className="bg-green-600 p-1  m-4 rounded-full w-30"  type="submit"> post</button>

        </form>
}

// fetch products


const getDetails = ()=>{
    return (
         <div>
               {console.log('products')
               }
            </div>
    )
}
    return(
        <>
        <h3>these are my products list</h3>
        
        <d>
           {createproduct()}
        <div  className="flex justify-center">
            <button className="bg-blue-600 p-1 m-4 rounded-full w-30 " onClick={getDetails}>get </button>
            <button className="bg-orange-600 p-1 m-4 rounded-full w-30" >put</button>
            <button className="bg-red-600 p-1 m-4 rounded-full w-30">delete</button>
        </div>
        </d>
        </>
    )
}
export default Productslist