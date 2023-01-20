import React from 'react';
import styles from './Home.module.scss'
import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
import {irGarais} from "../../utils/irGarais";

const Home = () => {

    // console.log('1980', irGarais(1980))
    // console.log('1996', irGarais(1996))
    // console.log('2000', irGarais(2000))
    // console.log('1900', irGarais(1900))
    // console.log('2100', irGarais(2100))


    return (
        <div className={styles.home}>
            <Slider/>
            <FeaturedProducts type={'featured'}/>
            <Categories/>
            <FeaturedProducts type={'trending'}/>
        </div>
    );
};

export default Home;