import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SearchFilter from "../SearchFilter/SearchFilter"
import About from "../About/About"
import ReceiptForm from "../ReceiptForm/ReceiptForm"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./Home.css"

export default function Home({ products, globalProducts, setProducts, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, receipt }) {
  return (
    <div className="home">
      {receipt && (
        <ReceiptForm receipt={receipt}/>
      )}
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
      <Contact />
      <Footer />
    </div>
  )
}
