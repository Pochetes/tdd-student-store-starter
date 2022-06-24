import React, { useEffect, useState } from "react"
import "./SearchFilter.css"

const SearchFilter = ({ products, globalProducts, setProducts }) => {
    const [category, setCategory] = useState("all")

    const handleCategory = category => {
        setCategory(category)
        if (category === "all") {
            setProducts(globalProducts)
            return
        }

        let newProducts = []
        for (let i = 0; i < globalProducts.length; i++) {
            if (globalProducts[i].category === category) {
                newProducts.push(globalProducts[i])
            }
        }

        setProducts(newProducts)
    }

    const search = (currentProducts, searchInput) => {
        let newProducts = []
        searchInput = searchInput.toLowerCase()

        for (let i = 0; i < currentProducts.length; i++) {
            let product = currentProducts[i].name.toLowerCase()
            if (product.search(searchInput) !== -1) {
                newProducts.push(currentProducts[i])
            }
        }
        return newProducts
    }

    const handleSearch = e => {
        let newProducts = []
        const searchInput = e.target.value

        if (searchInput === "") {
            handleCategory(category)
            return
        }

        newProducts = search(products, searchInput)
        setProducts(newProducts)
    }

    useEffect(() => {
        handleCategory("all")
    }, [])

    return (
        <div className="search-filter">
            <div className="search">
                <input
                onChange={e => handleSearch(e)}
                type="search"
                placeholder="Search Item"
                />
            </div>
            <div className="filter-categories">
                <div
                className={`category ${category === "all" && "selected"}`}
                onClick={() => handleCategory("all")}
                >All Categories</div>
                <div
                className={`category ${category === "clothing" && "selected"}`}
                onClick={() => handleCategory("clothing")}
                >Clothing</div>
                <div
                className={`category ${category === "food" && "selected"}`}
                onClick={() => handleCategory("food")}
                >Food</div>
                <div
                className={`category ${category === "accessories" && "selected"}`}
                onClick={() => handleCategory("accessories")}
                >Accessories</div>
                <div
                className={`category ${category === "tech" && "selected"}`}
                onClick={() => handleCategory("tech")}
                >Tech</div>
            </div>
        </div>
    )
}

export default SearchFilter
