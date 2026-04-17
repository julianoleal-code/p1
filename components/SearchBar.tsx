"use client";

// Esse componente é a barra de busca por cidade
// Recebe uma função onSearch que é chamada quando o usuário clica em Buscar

import { useState } from "react";

// Props: o que esse componente recebe
type SearchBarProps = {
  onSearch: (cidade: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  // Estado para guardar o que o usuário digitou
  const [cidade, setCidade] = useState("");

  // Função chamada quando clica no botão
  function handleClick() {
    if (cidade.trim() !== "") {
      onSearch(cidade.trim());
    }
  }

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Digite o nome da cidade..."
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        // Permite buscar ao pressionar Enter
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick();
        }}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Buscar
      </button>
    </div>
  );
}
