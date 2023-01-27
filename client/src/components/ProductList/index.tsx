import React from 'react';
import styles from './ProductList.module.scss'
import Card from "../Card";

interface IProductList {
    data: any[] | undefined
}

const ProductList: React.FC<IProductList> = ({data}) => {

    return (
        <div className={styles.list}>
            {data?.map(product =>
                <Card
                    title={product.attributes.title}
                    img={product.attributes.img}
                    price={product.attributes.price}
                    isNew={product.attributes.isNew}
                />
            )}
        </div>
    );
};

export default ProductList;