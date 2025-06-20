import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Toast from "../components/Toast";

export default function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const found = products.find((p) => p._id === id);
      setProduct(found);
    }
  }, [id, products]);

  // Auto-hide toast after 2 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!product) return <div>Product not found.</div>;

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "2rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: 8,
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#646cff" }}>
        &larr; Back to Products
      </Link>
      <div style={{ fontSize: "3rem", margin: "1rem 0" }}>{product.emoji}</div>
      <h2>{product.title}</h2>
      <div style={{ color: "#888", marginBottom: "0.5rem" }}>
        {product.category}
      </div>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        ${product.price.toFixed(2)}
      </div>
      <div style={{ margin: "1rem 0" }}>
        {product.meta &&
          product.meta.map((m, i) => (
            <div key={i} style={{ color: "#666" }}>
              {m}
            </div>
          ))}
      </div>
      <button
        style={{
          background: "#646cff",
          color: "#fff",
          border: "none",
          padding: "0.7rem 1.5rem",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background 0.2s",
          marginTop: "1.5rem",
        }}
        onClick={() => {
          addToCart(product);
          setToast("Added to cart!");
        }}
      >
        Add to Cart
      </button>
      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            background: "#888",
            color: "#fff",
            border: "none",
            padding: "0.7rem 1.5rem",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
      <Toast message={toast} onClose={() => setToast("")} />
    </div>
  );
}
