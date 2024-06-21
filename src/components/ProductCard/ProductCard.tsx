import styles from "./ProductCard.module.scss"

interface IProps {
    imageSrc: string;
    description: string;
}

const ProductCard: React.FC<IProps> = ({ imageSrc, description }) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img src={imageSrc} alt="" />
            </div>
            <p>{description}</p>
            <div className={styles.buttonsContainer}>
                <div className={styles.button}>
                    View Painting
                </div>
                <div className={styles.favoriteButton}>
                    <img src="/images/Vector.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;