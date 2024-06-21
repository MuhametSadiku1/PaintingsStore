import styles from './TeamSection.module.scss';

export default function TeamSection () {
    return (
        <section>
            <img src="/images/Our Creative Team.svg" alt="Our Creative Team" />
            {/* <h2>Our<br/> Creative Team</h2> */}
            <div className={styles.gallery}>
                <img src="/images/5bb66dd78e4cd8009a6a947fe64e21c8.png" alt="" />
                <div>
                    <img src="/images/display.png" alt="" />
                    <img src="/images/70a81409df134a0e66afbabac91dfcad.png" alt="" />
                </div>
            </div>
        </section>
    )
}