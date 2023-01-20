import React from 'react';
import styles from './FeaturedProducts.module.scss'
import ProductList from "../ProductList";

interface IFeaturedProducts {
    type: 'featured' | 'trending'
}

const FeaturedProducts: React.FC<IFeaturedProducts> = ({type}) => {

    const data = [
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]

    return (
        <div className={styles.products}>
            <h2 className={`sectionTitle ${styles.title}`}>
                {type === "featured" ? 'Featured ' : null}
                {type === "trending" ? 'Trending ' : null}
                products
            </h2>
            <div className={styles.items}>
                <ProductList data={data}/>
            </div>
        </div>
    );
};

export default FeaturedProducts;