import React from 'react';
import styles from './Input.module.scss'

const Input: React.FC = () => {
    return (
        <input className={styles.input} type="text"/>
    );
};

export default Input;