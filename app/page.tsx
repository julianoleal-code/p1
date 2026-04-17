"use client";

// Página principal - tela de busca por cidade
// "use client" porque usamos useState e eventos de clique

import { useState } from "react";
import Link from "next/link";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

// Tipo para guardar os dados que a API retorna
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
  // Estado que guarda os dados do clima buscados
  const [dados, setDados] = useState<DadosClima | null>(null);

  // Estado para mostrar mensagens de erro
  const [erro, setErro] = useState("");

  // Estado para mostrar "Carregando..." enquanto busca
  const [carregando, setCarregando] = useState(false);

  // Função chamada quando o usuário busca uma cidade
  async function buscarClima(cidade: string) {
    setCarregando(true);
    setErro("");
    setDados(null);

    // Pega a chave da API do arquivo .env.local
    const chave = process.env.NEXT_PUBLIC_WEATHER_KEY;

    // Se não tem chave configurada, usa dados de exemplo para demonstração
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
      }, 800); // simula tempo de resposta da API
      return;
    }

    // Monta a URL da API com a cidade e a chave
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`;

    try {
      const resposta = await fetch(url);

      // Se a API retornou erro, mostra mensagem específica
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

      // Converte a resposta para JSON
      const json = await resposta.json();
      setDados(json);
    } catch (e) {
      setErro("Erro ao buscar o clima. Verifique sua conexão.");
    }

    setCarregando(false);
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>☁️ WeatherNow</h1>
      <p>Busque o clima de qualquer cidade do mundo!</p>

      {/* Componente de busca */}
      <SearchBar onSearch={buscarClima} />

      {/* Mensagem de carregando */}
      {carregando && <p>Carregando...</p>}

      {/* Mensagem de erro */}
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {/* Resultado do clima */}
      {dados && (
        <div>
          {/* Componente que exibe os dados do clima */}
          <WeatherCard
            cidade={dados.name}
            temperatura={dados.main.temp}
            sensacaoTermica={dados.main.feels_like}
            descricao={dados.weather[0].description}
            icone={dados.weather[0].icon}
          />

          {/* Link para a página detalhada da cidade */}
          <div style={{ marginTop: "16px" }}>
            <Link
              href={`/cidade/${dados.name}`}
              style={{ color: "#0070f3", fontSize: "16px" }}
            >
              Ver página detalhada de {dados.name} →
            </Link>
          </div>
        </div>
      )}

      {/* Link para a página Sobre */}
      <div style={{ marginTop: "40px" }}>
        <Link href="/sobre" style={{ color: "#666", fontSize: "14px" }}>
          Sobre este projeto
        </Link>
      </div>
    </main>
  );
}
