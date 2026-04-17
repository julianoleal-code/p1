// Página Sobre - Rota estática /sobre
// Exibe informações do aluno e do projeto

import Link from "next/link";

export default function Sobre() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>📋 Sobre o Projeto</h1>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "24px",
          maxWidth: "500px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2>Informações do Aluno</h2>
        <p><strong>Nome:</strong> Luiz Marcelo Bichuli Leal</p>
        <p><strong>Matrícula:</strong> (informar sua matrícula)</p>
        <p><strong>Curso:</strong> Tecnologia em Análise e Desenvolvimento de Sistemas</p>
        <p><strong>Instituição:</strong> FAETERJ – Unidade Barra Mansa</p>

        <hr style={{ margin: "16px 0" }} />

        <h2>Sobre o Projeto</h2>
        <p>
          O WeatherNow é um mini portal de previsão do tempo desenvolvido com
          Next.js 14 e App Router. A aplicação consome a API da OpenWeatherMap
          para exibir dados de clima em tempo real, permitindo buscar qualquer
          cidade do mundo e visualizar temperatura, sensação térmica, umidade,
          vento e muito mais.
        </p>
      </div>

      {/* Link para voltar à página principal */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/" style={{ color: "#0070f3", fontSize: "16px" }}>
          ← Voltar para a página principal
        </Link>
      </div>
    </main>
  );
}
