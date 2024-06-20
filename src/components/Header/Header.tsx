import styles from "./Header.module.scss";

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h2>Logo</h2>
        <div className={styles.headerContent}>
            <nav className={styles.navList}>
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
            </nav>
            <div className={styles.icons}>
              <a href="#favorites">&#x2661;</a>
              <a href="#profile">&#x1F464;</a>
              <a href="#cart">&#x1F6D2;<span className={styles.notification}>1</span></a>
        </div>
        </div>
      </div>
    </header>
  )
}