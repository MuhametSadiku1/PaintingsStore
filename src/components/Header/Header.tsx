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
              <a href="#favorites"><img src="images/heart(2).svg" alt="" /></a>
              <a href="#profile"><img src="images/user(2).svg" alt="" /></a>
              <a href="#cart"><img src="images/shopping-bag(1).svg" alt="" /><span className={styles.notification}>1</span></a>
        </div>
        </div>
      </div>
    </header>
  )
}