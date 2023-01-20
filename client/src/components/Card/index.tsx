import React from 'react';
import styles from './Card.module.scss'

interface ICard {
    img: string
}

const Card: React.FC<ICard> = ({img}) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={img} alt="model"/>
                <span className={styles.tag}>New Season</span>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>Long sleeve</div>
                <div className={styles.price}>
                    <span className={styles.oldPrice}>$19</span>
                    <span className={styles.newPrice}>$12</span>
                </div>
            </div>
        </div>
    );
};

export default Card;