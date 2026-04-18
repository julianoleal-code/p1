import Link from "next/link";

export default function Sobre() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">⛅ WeatherNow</div>
          <ul className="nav-links">
            <li><Link href="/">Início</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      </header>

      <main style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>
          Sobre o Projeto
        </h1>

        <div style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "var(--shadow)",
        }}>
          <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Desenvolvedor</h3>
          <p><strong>Nome:</strong> Juliano Bichuli Leal</p>
          <p><strong>Matrícula:</strong> 2511560991008</p>
          <p style={{ marginBottom: "1.5rem" }}><strong>Curso:</strong> TADS - FAETERJ Barra Mansa</p>

          <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>Sobre o WeatherNow:</h3>
          <p>
            WeatherNow é uma aplicação web que mostra a previsão do tempo em tempo real. 
            Desenvolvida com Next.js e integrada com a API OpenWeatherMap.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--primary)",
            color: "white",
            borderRadius: "8px",
            fontWeight: "600",
          }}>
            ← Voltar
          </Link>
        </div>
      </main>

      <footer>
        <p>&copy; 2026 WeatherNow. Desenvolvido com Next.js e OpenWeatherMap API.</p>
      </footer>
    </>
  );
}
