import React from 'react';
import styles from './ProductList.module.scss'
import Card from "../Card";

interface IProductList {
    data: string[]
}

const ProductList: React.FC<IProductList> = ({data}) => {
    return (
        <div className={styles.list}>
            {data.map(img =>
                <Card img={img}/>
            )}
        </div>
    );
};

export default ProductList;