import Navbar from './navbar';
import styles from './layout.module.css'


export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={styles.main}>{children}</main>

        </>
    )
}