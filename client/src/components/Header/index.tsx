import React from 'react';
import styles from './Header.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.item}>
                        <img src="/images/en.png" alt="en"/>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className={styles.item}>
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                </div>
                <div className={styles.center}>
                    <nav className={`${styles.nav} ${styles.navLeft}`}>
                        <ul className={styles.navList}>
                            <li className={styles.item}>
                                <Link to={"/products/1"}>Men</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to={"/products/2"}>Women</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to={"/products/3"}>Children</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to={"/products/4"}>Accessories</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to={"/"}>DEFTWEAR</Link>
                    <nav className={`${styles.nav} ${styles.navRight}`}>
                        <ul className={styles.navList}>
                            <li className={styles.item}>
                                <Link to={"/"}>Homepage</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to={"/about"}>About</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to={"/stores"}>Stores</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/*<div className={styles.center}>*/}
                {/*    <Link to={"/"}>DEFTWEAR</Link>*/}
                {/*</div>*/}
                <div className={styles.right}>
                    <div className={styles.icons}>
                        <SearchIcon className={styles.icon}/>
                        <PersonOutlineIcon className={styles.icon}/>
                        <FavoriteBorderIcon className={styles.icon}/>
                        <div className={styles.cartIcon}>
                            <ShoppingCartOutlinedIcon className={styles.icon}/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;