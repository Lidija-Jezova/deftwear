import React from 'react';
import styles from './Slider.module.scss'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = React.useState<number>(0)

    const data = [
        'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/963696/pexels-photo-963696.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    ]

    const handleShowPreviousSlide = () => {
        setCurrentSlide(currentSlide === 0
            ? data.length - 1
            : (currentSlide) => currentSlide - 1)
    }

    const handleShowNextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1
            ? 0
            : (currentSlide) => currentSlide + 1)
    }

    return (
        <div className={styles.slider}>
            <div
                className={styles.container}
                style={{
                    width: (data.length * 100) + 'vw',
                    transform: `translate(-${currentSlide * 100}vw)`
                }}
            >
                {data.map(img =>
                    <img key={img} src={img} alt="model"/>
                )}
            </div>
            <div className={styles.icons}>
                <div className={styles.icon} onClick={handleShowPreviousSlide}>
                    <WestIcon/>
                </div>
                <div className={styles.icon} onClick={handleShowNextSlide}>
                    <EastIcon/>
                </div>
            </div>
        </div>
    );
};

export default Slider;