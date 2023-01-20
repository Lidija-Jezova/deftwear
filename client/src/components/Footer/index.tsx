import React from 'react';
import styles from './Footer.module.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <div className={styles.topItem}>
                        <h3 className={styles.title}>Categories</h3>
                        <nav>
                            <ul className={styles.navList}>
                                <li>
                                    <Link to={'/products/1'}>Women</Link>
                                </li>
                                <li>
                                    <Link to={'/products/1'}>Men</Link>
                                </li>
                                <li>
                                    <Link to={'/products/1'}>Shoes</Link>
                                </li>
                                <li>
                                    <Link to={'/products/1'}>Accessories</Link>
                                </li>
                                <li>
                                    <Link to={'/products/1'}>New Arrivals</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.topItem}>
                        <h3 className={styles.title}>Links</h3>
                        <nav>
                            <ul className={styles.navList}>
                                <li>
                                    <Link to={'/'}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Pages</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Stores</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Compare</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Cookies</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.topItem}>
                        <h3 className={styles.title}>About</h3>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at ducimus enim eos laboriosam
                            magnam natus nostrum praesentium repudiandae vero? At, beatae cupiditate delectus deleniti
                            dolor ex facere harum laboriosam nam nesciunt nihil nobis obcaecati officia officiis
                            perferendis, placeat possimus quaerat quos rerum sint sit soluta sunt ullam ut, vitae.
                        </div>
                    </div>
                    <div className={styles.topItem}>
                        <h3 className={styles.title}>Contact</h3>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at ducimus enim eos laboriosam
                            magnam natus nostrum praesentium repudiandae vero? At, beatae cupiditate delectus deleniti
                            dolor ex facere harum laboriosam nam nesciunt nihil nobis obcaecati officia officiis
                            perferendis, placeat possimus quaerat quos rerum sint sit soluta sunt ullam ut, vitae.
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <Link className={styles.logo} to={'/'}>DEFTWEAR</Link>
                    <div className={styles.copyright}>© Copyright 2022. All rights reserved</div>
                    <div className={styles.payment}>
                        <img src="/images/payment.png" alt="payment methods"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;