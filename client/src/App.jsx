import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import "./App.css";

const sampleProducts = [
  {
    _id: "1",
    emoji: "🌿",
    category: "Pre-roll",
    title: "Premium Pre-roll Pack",
    price: 25.0,
    meta: ["THC: 22%", "5 x 0.5g"],
  },
  {
    _id: "2",
    emoji: "💊",
    category: "Pharma",
    title: "CBD Pain Relief Capsules",
    price: 45.0,
    meta: ["30mg CBD", "30 capsules"],
  },
  {
    _id: "3",
    emoji: "🌸",
    category: "Flower",
    title: "Blue Dream",
    price: 55.0,
    meta: ["THC: 24%", "3.5g"],
  },
];

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setToast("Added to cart!");
    setTimeout(() => setToast(""), 1500);
  };

  return (
    <div>
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            background: "#646cff",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            zIndex: 9999,
            fontWeight: "bold",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          {toast}
        </div>
      )}

      <Header />

      <main>
        <div className="container">
          <section className="cart-summary" style={{ margin: "2rem 0" }}>
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <div>Your cart is empty.</div>
            ) : (
              <ul>
                {cart.map((item, idx) => (
                  <li key={idx}>
                    {item.title} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <section className="hero">
          <div className="container">
            <h1>
              Premium Cannabis/Pharma Products Curated for Quality Experience
            </h1>
            <p>
              Discover our hand-selected collection of premium cannabis and
              pharmaceutical products designed to enhance your wellness journey.
            </p>
          </div>
        </section>

        <div className="container">
          <section className="featured-section" id="featured-section">
            <div className="section-header">
              <h2 className="section-title">Featured Products</h2>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
