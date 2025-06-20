import React, { useState } from "react";
import "./CheckoutModal.css";

export default function CheckoutModal({ cart, total, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!name || !address || !email) {
      setStatus("Please fill in all fields.");
      return;
    }
    // Optionally, send order to backend here
    // await fetch("/api/checkout", { ... })
    onSubmit({ name, address, email });
    setStatus("Order placed! Thank you.");
  };

  return (
    <div className="checkout-modal-backdrop">
      <div className="checkout-modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} className="checkout-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item._id}>
                  {item.title} x {item.quantity} ($
                  {(item.price * item.quantity).toFixed(2)})
                </li>
              ))}
            </ul>
            <div>
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
          </div>
          <button type="submit" className="checkout-submit-btn">
            Place Order
          </button>
          {status && <div className="checkout-status">{status}</div>}
        </form>
      </div>
    </div>
  );
}
