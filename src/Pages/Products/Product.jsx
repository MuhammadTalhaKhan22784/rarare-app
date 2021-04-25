import React from 'react'
import Search from '../../Components/ProductComp/Search'
import SearchResultHead from '../../Components/ProductComp/SearchResultHead'
import './Product.css'

const Product = () => {
    return (
        <div>
            <div className='product_container'>
                <Search />
                <SearchResultHead />
            </div>
        </div>
    )
}

export default Product
