import React from 'react';
import styles from './Categories.module.scss'

const Categories = () => {

    const data = [
        'https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/977907/pexels-photo-977907.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3724358/pexels-photo-3724358.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]

    return (
        <div className={styles.categories}>
            {data.map(img =>
                <div
                    className={`
                    ${styles.item} 
                    ${img === data[1] ? styles.secondItem : null}
                    ${img === data[5] ? styles.lastItem : null}
                    `}
                    key={img}
                >
                    <img src={img} alt="image"/>
                    <div className={styles.tag}>
                        {img === data[0] ? 'sale' : null}
                        {img === data[1] ? 'new season' : null}
                        {img === data[2] ? 'men' : null}
                        {img === data[3] ? 'accessories' : null}
                        {img === data[4] ? 'women' : null}
                        {img === data[5] ? 'shoes' : null}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;