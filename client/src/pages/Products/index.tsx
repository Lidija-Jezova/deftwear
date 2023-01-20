import React from 'react';
import styles from './Products.module.scss'
import ProductList from "../../components/ProductList";
import Select, {TSelectOption} from "../../components/UI/Select";
import Checkbox from "../../components/UI/Checkbox";
import Slider from '@mui/material/Slider';
import PriceRange from "../../components/UI/PriceRange";
import {useDebounce} from "../../hooks/useDebounce";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {useDisableBodyScroll} from "../../hooks/useDisableBodyScroll";
import Button from "../../components/UI/Button";

const Products = () => {

    // (fromValue > prev[1]) ? (((prev[1] - 100) < 0) ? 0 : prev[1] - 100) : fromValue

    const data = [
        'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]

    const options = [
        {label: 'one', value: 1},
        {label: 'two', value: 2},
        {label: 'three', value: 3},
    ]

    const [filteringMenuIsActive, setFilteringMenuIsActive] = React.useState<boolean>(false)

    const [selectValue, setSelectValue] = React.useState<TSelectOption | undefined>(options[0])
    const [rangeValue, setRangeValue] = React.useState<number[]>([240, 550])

    const [currentFromPrice, setCurrentFromPrice] = React.useState<number>(rangeValue[0])
    const [currentToPrice, setCurrentToPrice] = React.useState<number>(rangeValue[1])

    const handleSelectOnChange = (option: TSelectOption | undefined) => {
        setSelectValue(option)
    }

    const handlePriceRangeOnChange = (event: Event, newValue: number | number[]) => {
        setRangeValue(newValue as number[])
        if (Array.isArray(newValue)) {
            setCurrentFromPrice(newValue[0])
            setCurrentToPrice(newValue[1])
        }
    }

    const handleCurrentFromPriceOnChange = (newValue: number) => {
        setCurrentFromPrice(newValue)
    }

    const handleCurrentToPriceOnChange = (newValue: number) => {
        setCurrentToPrice(newValue)
    }

    const handleFromPriceOnChange = (newValue: number) => {
        setRangeValue(prev => [(newValue > prev[1]) ? (((prev[1] - 100) < 0) ? 0 : prev[1] - 100) : newValue, prev[1]])
    }

    const handleToPriceOnChange = (newValue: number) => {
        setRangeValue(prev => [prev[0], (newValue < prev[0]) ? (((prev[0] + 100) > 1000) ? 1000 : prev[0] + 100) : (newValue > 1000 ? 1000 : newValue)])
    }

    const debouncedFromPrice = useDebounce(handleFromPriceOnChange)
    const debouncedToPrice = useDebounce(handleToPriceOnChange)

    React.useEffect(() => {
        debouncedFromPrice(currentFromPrice)
    }, [currentFromPrice])

    React.useEffect(() => {
        debouncedToPrice(currentToPrice)
    }, [currentToPrice])

    React.useEffect(() => {
        if (Array.isArray(rangeValue)) {
            setCurrentFromPrice(rangeValue[0])
            setCurrentToPrice(rangeValue[1])
        }
    }, [rangeValue])

    useDisableBodyScroll(filteringMenuIsActive)

    return (
        <div className={styles.wrapper}>
            <div className={styles.actions}>
                <Button
                    size={'large'}
                    width={'50%'}
                    onClick={() => setFilteringMenuIsActive(true)}
                >
                    <FilterAltOutlinedIcon className={styles.filtersIcon}/>
                    <span>Filters</span>
                </Button>
            </div>
            <div className={`${styles.filteringMenu} ${filteringMenuIsActive ? styles.active : ''}`}>
                <div className={styles.closeBtnWrapper}>
                    <Button
                        fontSize={'2rem'}
                        width={'4.3rem'}
                        onClick={() => setFilteringMenuIsActive(false)}
                    >&times;
                    </Button></div>
                <div className={styles.menuItem}>
                    <h3>Sort by</h3>
                    <Select options={options} value={selectValue} onChange={handleSelectOnChange}/>
                </div>
                <div className={styles.menuItem}>
                    <h3>Filter by price</h3>
                    <PriceRange price={[currentFromPrice, currentToPrice]}
                                onFromPriceChange={handleCurrentFromPriceOnChange}
                                onToPriceChange={handleCurrentToPriceOnChange}
                    />
                    <Slider
                        sx={{
                            color: '#5268ff',
                        }}
                        min={0}
                        max={1000}
                        value={rangeValue}
                        onChange={handlePriceRangeOnChange}
                        valueLabelDisplay="auto"
                    />
                </div>
                <div className={styles.menuItem}>
                    <h3>Product Categories</h3>
                    <Checkbox label={"Shoes"}/>
                    <Checkbox label={"Pants"}/>
                    <Checkbox label={"Glasses"}/>
                </div>
            </div>
            <div className={styles.poster}>
                <img
                    src="https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
            </div>
            <div className={styles.items}>
                <ProductList data={data}/>
            </div>
        </div>
    );
};

export default Products;