// Rota dinâmica: /cidade/[name]
// Essa página mostra os detalhes completos do clima de uma cidade
// O [name] na pasta significa que é dinâmico - muda conforme a cidade

import Link from "next/link";
import WeatherCard from "../../../components/WeatherCard";

// Isso diz ao Next.js para não tentar gerar essa página em tempo de build
// porque ela depende de dados externos (API)
export const dynamic = "force-dynamic";

// O Next.js passa os parâmetros da URL como `params`
type Props = {
  params: Promise<{ name: string }>;
};

export default async function PaginaCidade({ params }: Props) {
  // Pega o nome da cidade da URL
  const { name } = await params;

  // Pega a chave da API do .env.local
  const chave = process.env.NEXT_PUBLIC_WEATHER_KEY;

  // Se não tem chave, usa dados de exemplo para demonstração
  if (!chave || chave === "sua_chave_aqui") {
    const dadosExemplo = {
      name: name,
      main: { temp: 28.5, feels_like: 31.2, humidity: 72 },
      weather: [{ description: "céu limpo", icon: "01d" }],
      wind: { speed: 3.5 },
      sys: { country: "BR" },
    };

    return (
      <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <h1>🌍 Detalhes do Clima</h1>
        <WeatherCard
          cidade={dadosExemplo.name}
          temperatura={dadosExemplo.main.temp}
          sensacaoTermica={dadosExemplo.main.feels_like}
          descricao={dadosExemplo.weather[0].description}
          icone={dadosExemplo.weather[0].icon}
          umidade={dadosExemplo.main.humidity}
          vento={dadosExemplo.wind.speed}
          pais={dadosExemplo.sys.country}
        />
        <div style={{ marginTop: "20px" }}>
          <Link href="/" style={{ color: "#0070f3", fontSize: "16px" }}>
            ← Voltar para a busca
          </Link>
        </div>
      </main>
    );
  }

  // Monta a URL da API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${chave}&units=metric&lang=pt_br`;

  // Busca os dados diretamente no servidor (Server Component)
  const resposta = await fetch(url);

  // Se não encontrou a cidade
  if (!resposta.ok) {
    return (
      <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <h1>Cidade não encontrada</h1>
        <Link href="/" style={{ color: "#0070f3" }}>
          ← Voltar para a página principal
        </Link>
      </main>
    );
  }

  // Converte para JSON
  const dados = await resposta.json();

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>🌍 Detalhes do Clima</h1>

      {/* Componente WeatherCard com todos os dados, incluindo os extras */}
      <WeatherCard
        cidade={dados.name}
        temperatura={dados.main.temp}
        sensacaoTermica={dados.main.feels_like}
        descricao={dados.weather[0].description}
        icone={dados.weather[0].icon}
        umidade={dados.main.humidity}
        vento={dados.wind.speed}
        pais={dados.sys.country}
      />

      {/* Link para voltar à página principal */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/" style={{ color: "#0070f3", fontSize: "16px" }}>
          ← Voltar para a busca
        </Link>
      </div>
    </main>
  );
}
