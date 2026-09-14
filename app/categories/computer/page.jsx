import styles from '../../styles.module.css'
const Computers = ()=>{
    return (
        <div className={styles.colors}>
        <h2 className='text-center text-xl capitalize text-gray pb-5'> The list of my computers</h2>
        <img src="../computer3.avif" className=' sm:w-100 w-full h-150 object-cover m-0-auto block' alt="shop log" />
        </div>
    )
}
export default Computers