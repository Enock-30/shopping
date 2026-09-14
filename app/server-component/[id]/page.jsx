
const getBlogId = async (id) =>{
const respo = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const data = await respo.json()
return data
}

export const generateMetadata = async ({params}) =>{
    const {id} = await params
const datas = await getBlogId(id)
return {
    title:datas.title,
    description:datas.description
}
}
const Serverblogdetails  = async ({params}) =>{
    const { id } = await params
const details = await getBlogId(id)



return (<div>
    <h4>{details.title}</h4>
    <p>{details.body}</p>
</div>)
}

 export default Serverblogdetails