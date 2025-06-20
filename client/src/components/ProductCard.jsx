import React from "react";

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <div className="product-image">{product.emoji}</div>
    <div className="product-info">
      <div className="product-category">{product.category}</div>
      <h3 className="product-title">{product.title}</h3>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <div className="product-meta">
        {product.meta && product.meta.map((m, i) => <span key={i}>{m}</span>)}
      </div>
      {onAddToCart && (
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  </div>
);

export default ProductCard;
