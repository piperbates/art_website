import Link from 'next/link'
import styles from '../styles/UnderConstruction.module.css'

const UnderConstruction = () => {
    return <div className={styles.underConstruction}>
        <h1>This site is under construction</h1>

        <div className={styles.elsewhere}>
            <p>Find me elsewhere:</p>
            <ul>
                <li><Link href='https://ko-fi.com/piperstrangeart'>Ko-fi</Link></li>
                <li><Link href='https://www.instagram.com/piperstrangeart/'>Instagram</Link></li>
            </ul>
        </div>
    </div>
}

export default UnderConstruction