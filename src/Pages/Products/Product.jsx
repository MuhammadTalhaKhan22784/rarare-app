import React from 'react'
import Search from '../../Components/ProductComp/Search'
import SearchResultHead from '../../Components/ProductComp/SearchResultHead'
import './Product.css'

const Product = () => {
    return (
        <div>
            <div className='product_container'>
                <div className="search_desktop_view">

                <Search />
                </div>
                <SearchResultHead />
            </div>
        </div>
    )
}

export default Product
