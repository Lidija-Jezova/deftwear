import React from 'react';
import styles from './Search.module.scss'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                // value={}
                // onChange={}
                type="text"
                placeholder={'Search'} />
        </div>
    );
};

export default Search;