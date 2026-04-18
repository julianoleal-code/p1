"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

type DadosClima = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
};

export default function Home() {
  const [dados, setDados] = useState<DadosClima | null>(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscarClima(cidade: string) {
    setCarregando(true);
    setErro("");
    setDados(null);

    const chave = process.env.NEXT_PUBLIC_WEATHER_KEY;

    if (!chave || chave === "sua_chave_aqui") {
      setTimeout(() => {
        setDados({
          name: cidade,
          main: { temp: 28.5, feels_like: 31.2, humidity: 72 },
          weather: [{ description: "céu limpo", icon: "01d" }],
          wind: { speed: 3.5 },
          sys: { country: "BR" },
        });
        setCarregando(false);
      }, 800);
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;

    try {
      const resposta = await fetch(url);

      if (!resposta.ok) {
        if (resposta.status === 401) {
          setErro("Chave da API inválida ou ainda não ativada. Aguarde alguns minutos e tente novamente.");
        } else if (resposta.status === 404) {
          setErro("Cidade não encontrada. Verifique o nome e tente novamente.");
        } else {
          setErro(`Erro na API (código ${resposta.status}). Tente novamente.`);
        }
        setCarregando(false);
        return;
      }

      const json = await resposta.json();
      setDados(json);
    } catch (e) {
      setErro("Erro ao buscar o clima. Verifique sua conexão.");
    }

    setCarregando(false);
  }

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

      <main style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Previsão do Tempo</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
            Descubra o clima de qualquer cidade do mundo em tempo real
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <SearchBar onSearch={buscarClima} />
        </div>

        {carregando && (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>⏳ Carregando dados...</p>
          </div>
        )}

        {erro && (
          <div style={{
            padding: "1rem",
            margin: "1rem 0",
            backgroundColor: "#ffebee",
            border: "1px solid #ef5350",
            borderRadius: "8px",
            color: "#c62828",
          }}>
            {erro}
          </div>
        )}

        {dados && (
          <div style={{ marginTop: "2rem" }}>
            <WeatherCard
              cidade={dados.name}
              temperatura={dados.main.temp}
              sensacaoTermica={dados.main.feels_like}
              descricao={dados.weather[0].description}
              icone={dados.weather[0].icon}
            />

            <div style={{ marginTop: "2rem" }}>
              <Link href={`/cidade/${dados.name}`} style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "var(--primary)",
                color: "white",
                borderRadius: "8px",
                fontWeight: "600",
                transition: "background-color 0.3s ease",
              }}>
                Ver detalhes completos →
              </Link>
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2026 WeatherNow. Desenvolvido com Next.js e OpenWeatherMap API.</p>
      </footer>
    </>
  );
}
