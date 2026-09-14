// ' use client '
// import Toggle from "@/components-list/toggle-bar"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faClose} from "@fortawesome/free-solid-svg-icons"
// import { useState } from "react"


// const Modal =  ()=>{
// const [closeIcon,setCloseIcon] = useState(false)
//     const Myclosebtn = () =>{
//         return (
//         <FontAwesomeIcon icon={faClose}/>
//         )
//     }
//     const Close =() =>{
//         setCloseIcon(!closeIcon)
//     }
//     return (
    
//     <>
// {/* handle close btn to function   */}
   
//        <div style={{display:closeIcon ? "block": "none"}}>
      
//   <div  className="relative z-10 " aria-labelledby="dialog-title"  role="dialog" aria-modal="true" >
    
//     <div className="fixed inset-0 bg-gray-900 transition-opacity" aria-hidden="true"></div>

//     <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//       <div className=" bg-black-900 flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

//         <div className="relative transform overflow-hidden rounded-lg bg-red text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
//                              <button onClick={Close} className="rounded-md  px-2.5 py-1.5 text-lg font-semibold text-green-900 hover:text-black-950 bg-red-900"> <Myclosebtn/> </button>

//           <div className="bg-black-900 px-4 py-3 sm:flex sm:flex-row-reverse   sm:px-6" >
//             {/* <Toggle/> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> 
//  </>
//     )
// }
// export default Modal