import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.scss';

export default function ProductsList () {
    return (
        <div className={styles.productList}>
            <ProductCard imageSrc={'/images/pexels-steve-johnson-2989090.png'} description={'Abstract art painting - "the four cubes"'} />
            <ProductCard imageSrc={'/images/pexels-nick-collins-1293125.png'} description={'Abstract art painting - "the four cubes"'} />
            <ProductCard imageSrc={'/images/pexels-steve-johnson-3535542.png'} description={'Abstract art painting - "the four cubes"'} />
        </div>
    )
}