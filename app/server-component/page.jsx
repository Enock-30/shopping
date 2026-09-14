import Link from "next/link";

export const metadata = {
title: 'server-page',
description: 'this is my server site blogd'
}
const Serverpage = async() =>{
const respo = await fetch(`https://jsonplaceholder.typicode.com/posts`)
const data = await respo.json();

return data
}

const ServerSideposts = async({params})=>{
    const {id} = params
 
    
const getPost = await Serverpage(id);
            
return (
    <div>
       <h2>These are my blogs</h2> 
      {getPost.length === 0 ? (<p>blogs are loading</p>) : (
        <ul >
           
            
            {getPost.map((blog) =>(
        <li key={blog.id} className="m-3 p-4 border">
                    
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <Link href={`/server-component/${blog.id}`} className="text-blue-900"> read more </Link>
                </li>
))}
        </ul>
      )}
    </div>
)

}
export default ServerSideposts