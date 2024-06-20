import Reason from '../Reason/Reason';
import styles from './OurProductsSection.module.scss';

export default function OurProductsSection () {
    return (
        <section className={styles.ourProductsSection}>
            <div className={styles.sectionContainer}>
                <h2>Why Our Products?</h2>
                <div className={styles.reasonsContainer}>
                    <Reason imageSrc={'images/Group 838.svg'} reason={'10 years of experience'} description={'Lorem ipsum dolerom ahnme tios nahito eloreum ipsuem'} />
                    <Reason imageSrc={'images/Group 19.svg'} reason={'Original Art Pieces'} description={'Lorem ipsum dolerom ahnme tios nahito eloreum ipsuem'} />
                    <Reason imageSrc={'images/Group 839.svg'} reason={'Organic Materials'} description={'Lorem ipsum dolerom ahnme tios nahito eloreum ipsuem'} />
                </div>
            </div>
        </section>
    )
}