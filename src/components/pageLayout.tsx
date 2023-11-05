import styles from '../styles/pageLayout.module.css'

const PageLayout = ({children}: {
    children: React.ReactNode
  }) => {
    return <div className={styles.container}>
        {children}
    </div>
}

export default PageLayout