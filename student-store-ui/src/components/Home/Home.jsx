import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SearchFilter from "../SearchFilter/SearchFilter"
import About from "../About/About"
import Footer from "../Footer/Footer"
import "./Home.css"

export default function Home({ products, globalProducts, setProducts, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart }) {
  return (
    <div className="home">
      <Hero />
      <SearchFilter
        products={products}
        globalProducts={globalProducts}
        setProducts={setProducts}
      />
      <div className="product-grid-container">
        <ProductGrid
          products={products}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          shoppingCart={shoppingCart}
        />
      </div>
      <About />
      <Footer />
    </div>
  )
}
