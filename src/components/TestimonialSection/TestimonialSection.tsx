import styles from './TestionialSection.module.scss'

export default function TestimonialSection () {
    return (
        <section className={styles.testimonialSection}>
            <img src="/images/pexels-svetlana🎞-10457233.png" alt="pexels-svetlana" />
            <div className={styles.testimonial}>
                <p>
                    Ut et interdum lacus. Nulla facilisi. Nam imperdiet erat sit amet magna egestas luctus. In aliquam rutrum placerat. Cras at ipsum euismod, semper enim vehicula, gravida dui. Sed eu mauris sollicitudin, interdum mi a, fermentum nisi.
                </p>
                <p>
                    Integer vitae aliquam magna, posuere euismod sem. Mauris imperdiet ullamcorper felis a sollicitudin. Curabitur vitae molestie nunc. Integer justo enim, hendrerit ac magna eu, semper vulputate lacus. 
                </p>
                <p>
                    Integer vitae aliquam magna, posuere euismod sem. Mauris imperdiet ullamcorper felis a sollicitudin. Curabitur vitae molestie nunc.
                </p>
                <p><span>-Anonym lorem ipsumi 2022</span></p>
            </div>
        </section>
    )
}