import styles from './Hero.module.scss';

export default function Hero () {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.textContainer}>
                    <h1>Donec ligula sapien, laoreet eu lacinia vitae, consectetur non lacus.</h1>
                    <p>Proin ultrices urna a diam pharetra dictum</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button>Lorem Ipsum</button>
                    <button>Lorem Ipsum</button>
                </div>
            </div>
        </section>
    )
}