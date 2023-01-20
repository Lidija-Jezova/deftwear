import React from 'react';
import styles from './Checkbox.module.scss'

interface ICheckbox {
    label: string
    checked?: boolean
}

const Checkbox: React.FC<ICheckbox> = ({label, checked}) => {
    const defaultChecked = checked ? checked : false
    const [isChecked, setIsChecked] = React.useState<boolean>(defaultChecked)

    const handleToggleCheckbox = () => {
        setIsChecked(prev => !prev)
    }

    return (
        <label className={styles.checkboxContainer}>
            <input className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`} type="checkbox"
                   checked={isChecked} onClick={handleToggleCheckbox}/>
            <span className={styles.label}>{label}</span>
        </label>
    );
};

export default Checkbox;