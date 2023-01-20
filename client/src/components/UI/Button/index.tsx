import React from 'react';
import styles from './Button.module.scss'

interface IButton {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    category?: 'regular' | 'primary'
    size?: 'small' | 'medium' | 'large'
    fontSize?: string
    color?: string
    width?: string
    onClick: () => void
}

const Button: React.FC<IButton> = ({
                                       children,
                                       type = 'button',
                                       disabled = false,
                                       category = 'regular',
                                       size = 'medium',
                                       fontSize,
                                       color,
                                       width,
                                       onClick
                                   }) => {

    const handleOnClick = () => {
        onClick()
    }

    return (
        <div className={styles.wrapper}>
            <button
                className={`
                ${category === 'regular' ? styles.regular : ''}
                ${category === 'primary' ? styles.primary : ''}
                ${size === 'small' ? styles.small : ''}
                ${size === 'medium' ? styles.medium : ''}
                ${size === 'large' ? styles.large : ''}
                `}
                style={{
                    width: width ? width : '',
                    fontSize: fontSize ? fontSize : ''
                }}
                onClick={handleOnClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;