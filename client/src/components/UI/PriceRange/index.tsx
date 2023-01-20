import React from 'react';
import styles from './PriceRange.module.scss'
import {isStringInteger} from "../../../utils/isInteger";

interface IPriceRange {
    price: number | number[]
    onFromPriceChange: (newValue: number) => void
    onToPriceChange: (newValue: number) => void
}

const PriceRange: React.FC<IPriceRange> = ({price, onFromPriceChange, onToPriceChange}) => {
    const fromValue: number  = Array.isArray(price) ? price[0] : price
    const toValue: number  = Array.isArray(price) ? price[1] : price

    return (
        <div className={styles.priceRange}>
            <div className={styles.top}>
                <div className={styles.field}>
                    <input type="string"
                           value={fromValue}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                               if (isStringInteger(e.target.value)) {
                                   onFromPriceChange(Number(e.target.value))
                               }
                           }}
                    />
                </div>
                <div className={styles.separator}>-</div>
                <div className={styles.field}>
                    <input type="string"
                           value={toValue}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                               if (isStringInteger(e.target.value)) {
                                   onToPriceChange(Number(e.target.value))
                               }
                           }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceRange;