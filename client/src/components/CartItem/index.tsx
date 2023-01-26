import React from 'react';
import styles from './CartItem.module.scss'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface ICartItem {
    image: string
    name: string
    price: number
}

const CartItem: React.FC<ICartItem> = ({image, name, price}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={image} alt=""/>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className={styles.bottom}>
                    <div>1 x {price}$</div>
                    <DeleteOutlineOutlinedIcon className={styles.delete}/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;