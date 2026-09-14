import styles from '../../styles.module.css'
const Books = () =>{
    return (
        <div className={styles.books}>
        <h2> this is my books</h2>
        <img src="../books.jpg" className='w-200 block m-autjo object-contain' alt="about books" />
        </div>
    )
}

export default Books