import React from 'react';
import styles from './Cart.module.scss'
import Button from "../UI/Button";
import CartItem from "../CartItem";
import {useOnClickOutside} from "../../hooks/useOnClickOutside";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const data = [
    {
        image: 'https://images.pexels.com/photos/8283214/pexels-photo-8283214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Shoes Nike',
        price: 60
    },
    {
        image: 'https://images.pexels.com/photos/8283205/pexels-photo-8283205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Shoes Adidas',
        price: 80
    },
]

interface ICart {
    isCartOpened: boolean
    handleClose: () => void
}

const Cart: React.FC<ICart> = ({isCartOpened, handleClose}) => {
    const cartRef = React.useRef<any>()

    useOnClickOutside(cartRef, handleClose)

    return (
        <div className={`${styles.wrapper} ${isCartOpened ? styles.active : ''}`}>
            <div ref={cartRef} className={`${styles.cart} ${isCartOpened ? styles.active : ''}`}>
                <div className={styles.closeWrapper}>
                    <Button
                        fontSize={'2rem'}
                        width={'4.3rem'}
                        onClick={() => handleClose()}
                    >&times;
                    </Button>
                </div>
                <h3 className={styles.title}>Products in your cart</h3>
                <ul className={styles.list}>
                    {data?.map(item =>
                        <CartItem image={item.image} name={item.name} price={item.price}/>
                    )}
                </ul>
                <div className={styles.subtotal}>
                    subtotal
                    <span>250$</span>
                </div>
                <Button
                    width={'100%'}
                    category={'primary'}
                    onClick={() => {
                    }}>
                    <AddShoppingCartOutlinedIcon className={styles.cartIcon}/>
                    proceed to checkout
                </Button>
                <button className={styles.reset}>
                    <HighlightOffOutlinedIcon/>
                    Reset cart
                </button>
            </div>
        </div>
    )
        ;
};

export default Cart;