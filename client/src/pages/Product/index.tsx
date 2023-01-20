import React from 'react';
import styles from './Product.module.scss'
import Button from "../../components/UI/Button";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = () => {

    const data = [
        'https://images.pexels.com/photos/8283214/pexels-photo-8283214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8283205/pexels-photo-8283205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8283208/pexels-photo-8283208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/8283210/pexels-photo-8283210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]

    const [selectedImg, setSelectedImg] = React.useState<number>(0)

    return (
        <div className={styles.wrapper}>
            <div className={styles.images}>
                <div className={styles.imagesSmall}>
                    {data.map((img, index) =>
                        <div key={index} className={styles.imageSmall} onClick={() => setSelectedImg(index)}>
                            <img src={data[index]} alt=""/>
                        </div>
                    )}
                </div>
                <div className={styles.imageMain}>
                    <img src={data[selectedImg]} alt=""/>
                </div>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>This is title</h3>
                <span className={styles.price}>90.00$</span>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Culpa cupiditate fuga mollitia sequi velit, voluptates!
                </p>
                <div className={styles.details}>
                    <div><span>Vendor:</span> 123</div>
                    <div><span>Product type:</span> 123</div>
                    <div><span>Tags:</span> 123</div>
                </div>
                <div className={styles.actions}>
                    <div className={styles.selection}>
                        <Button onClick={() => {
                        }}>-</Button>
                        <span>5</span>
                        <Button onClick={() => {
                        }}>+</Button>
                    </div>
                    <Button width={'25rem'} category={'primary'} onClick={() => {}}>
                        <ShoppingCartOutlinedIcon className={styles.cartIcon}/>Add to cart
                    </Button>
                    <div className={styles.addTo}>
                        <span><FavoriteBorderOutlinedIcon className={styles.icon} />Add to wishlist</span>
                        <span><BalanceOutlinedIcon className={styles.icon} />Add to compare</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;