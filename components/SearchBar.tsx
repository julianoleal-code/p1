"use client";

import { useState } from "react";

type SearchBarProps = {
  onSearch: (cidade: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [cidade, setCidade] = useState("");

  const handleSearch = () => {
    if (cidade.trim() !== "") {
      onSearch(cidade.trim());
    }
  };

  return (
    <div style={{
      display: "flex",
      gap: "0.75rem",
      maxWidth: "500px",
      margin: "0 auto",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      <input
        type="text"
        placeholder="Ex: Rio de Janeiro, São Paulo..."
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        style={{
          flex: "1 1 250px",
          padding: "0.875rem",
          fontSize: "1rem",
          border: "2px solid var(--border)",
          borderRadius: "8px",
          backgroundColor: "var(--surface)",
          color: "var(--text-primary)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          minWidth: "250px",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--primary)";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30, 136, 229, 0.1)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "0.875rem 2rem",
          fontSize: "1rem",
          fontWeight: "600",
          backgroundColor: "var(--primary)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease, transform 0.2s ease",
          boxShadow: "var(--shadow)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "var(--primary-dark)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "var(--primary)";
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = "scale(0.98)";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        🔍 Buscar
      </button>
    </div>
  );
}
