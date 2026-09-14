
'use client'
import { useState,useEffect } from "react";
import { useParams } from "next/navigation";
// import { useRouter } from "next/router";
 
const BlogPostDetails =  ()=>{

   const [blogs,setBlogs ] = useState([]) 
    const {id} = useParams() 
   

    
    useEffect( () =>{
        const getPost = async ()=>{
            try{
                const respo = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const data = await respo.json();
                 setBlogs(data)
                 
        }
        catch(error){console.log('something went wrong');
        }
        }
        
        getPost()
      },[])

   return (
       <>
       <h1>{blogs.title} </h1>
       <p>{blogs.body}</p>
       </> 
    )
}

export default BlogPostDetails