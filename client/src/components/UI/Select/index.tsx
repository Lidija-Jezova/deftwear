import React from 'react';
import styles from './Select.module.scss'

export type TSelectOption = {
    label: string
    value: string | number
}

interface ISelect {
    options: TSelectOption[]
    value?: TSelectOption
    onChange: (value: TSelectOption | undefined) => void
}

const Select: React.FC<ISelect> = ({options, value, onChange}) => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [highlightedIndex, setHighlightedIndex] = React.useState<number>(0)

    const handleOnClearOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        onChange(undefined)
    }

    const handleOnClickOption = (e: React.MouseEvent<HTMLLIElement>, option: TSelectOption) => {
        e.stopPropagation()
        if (JSON.stringify(option) !== JSON.stringify(value)) onChange(option)
        setIsOpen(false)
    }

    const handleOnOptionMouseEnter = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
        setHighlightedIndex(index)
    }

    const isOptionSelected = (option: TSelectOption) => {
        return JSON.stringify(option) === JSON.stringify(value)
    }

    React.useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen])

    return (
        <div
            className={styles.container}
            tabIndex={0}
            onClick={() => setIsOpen(prev => !prev)}
            onBlur={() => setIsOpen(false)}
        >
            <span className={styles.value}>{value?.label}</span>
            <button
                className={styles.clearBtn}
                onClick={handleOnClearOptions}
            >
                &times;
            </button>
            <div className={styles.divider}></div>
            <div className={styles.arrow}></div>
            <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
                {options.map((option: TSelectOption, index: number) => (
                    <li
                        key={option.value}
                        className={`
                        ${styles.option} 
                        ${highlightedIndex === index ? styles.highlighted : ''}
                        ${isOptionSelected(option) ? styles.selected : ''}
                        `}
                        onClick={(e: React.MouseEvent<HTMLLIElement>) => handleOnClickOption(e, option)}
                        onMouseEnter={(e: React.MouseEvent<HTMLLIElement>) => handleOnOptionMouseEnter(e, index)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;