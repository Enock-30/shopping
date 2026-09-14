import styles from '../../styles.module.css'
export function Television (){
    return(
        <div className={`${styles.books} xl:text-center xl:w-600 bg-red-900`}>
     
        <div className={styles.block}>
            <h2 className='text-center text-xl capitalize'>This is my television page</h2>
        </div>
        </div>
    )
}

export default Television