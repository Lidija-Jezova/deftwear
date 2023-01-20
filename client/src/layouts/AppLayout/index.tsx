import React from 'react';
import styles from './AppLayout.module.scss'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default AppLayout;