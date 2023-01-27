import React from 'react';
import styles from './Card.module.scss'

interface ICard {
    title: string
    img: any
    price: number
    isNew: boolean
}

const Card: React.FC<ICard> = ({title, img, price, isNew}) => {
    console.log(`${process.env.REACT_APP_UPLOAD_URL}${img.data.attributes.url}`)
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={`${process.env.REACT_APP_UPLOAD_URL}${img.data.attributes.url}`} alt="model"/>
                {isNew ? <span className={styles.tag}>New Season</span> : null}
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{title}</div>
                <div className={styles.price}>
                    <span className={styles.oldPrice}>${price+10}</span>
                    <span className={styles.newPrice}>${price}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;