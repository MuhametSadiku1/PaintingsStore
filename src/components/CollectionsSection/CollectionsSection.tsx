import styles from './CollectionsSection.module.scss';

export default function CollectionsSection () {
    return (
        <section className={styles.collectionsSection} >
            <div className={styles.collectionsSectionContainer}>
                <img src="/images/Our Collections.svg" alt="" />
                <div className={styles.gallery}>
                    <div>
                        <img src="/images/pexels-nick-collins-1293125.png" alt="" />
                        <p>
                            Ut et interdum lacus. Nulla facilisi. Nam imperdiet erat sit amet .
                        </p>
                    </div>
                    <div>
                        <p>
                            . Mauris imperdiet ullamcorper felis a sollicitudin. Curabitur vitae molestie nunc.
                        </p>
                        <img src="/images/pexels-steve-johnson-3535542.png" alt="" />
                    </div>
                    <div>
                        <p>
                            Integer vitae aliquam magna, posuere euismod sem. Mauris imperdiet ullamcorper felis a sollicitudin.
                        </p>
                        <img src="/images/pexels-steve-johnson-2989090.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}