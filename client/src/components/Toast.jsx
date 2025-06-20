import React from "react";

export default function Toast({ message, onClose }) {
  if (!message) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        background: "#646cff",
        color: "#fff",
        padding: "1rem 2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        zIndex: 9999,
        fontWeight: "bold",
        fontSize: "1rem",
        transition: "opacity 0.3s",
      }}
      onClick={onClose}
      role="alert"
      aria-live="polite"
    >
      {message}
      <span
        style={{
          marginLeft: "1.5rem",
          cursor: "pointer",
          fontWeight: "normal",
        }}
      >
        &times;
      </span>
    </div>
  );
}
