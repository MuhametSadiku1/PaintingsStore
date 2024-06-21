import styles from './Footer.module.scss';

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <h2>Logo</h2>
                <img src="images/Group 531.svg" alt="" />
            </div>
        </footer>
    )
}