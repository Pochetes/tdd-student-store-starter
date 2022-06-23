import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home({ products, setProducts }) {
  return (
    <div className="home">
      <Hero />
      <div className="product-grid-container">
        <ProductGrid
        products={products}
        setProducts={setProducts}
        />
      </div>
    </div>
  )
}
