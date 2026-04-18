import Link from "next/link";
import WeatherCard from "../../../components/WeatherCard";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ name: string }>;
};

export default async function PaginaCidade({ params }: Props) {
  const { name } = await params;
  const chave = process.env.NEXT_PUBLIC_WEATHER_KEY;

  if (!chave || chave === "sua_chave_aqui") {
    const dadosExemplo = {
      name: name,
      main: { temp: 28.5, feels_like: 31.2, humidity: 72 },
      weather: [{ description: "céu limpo", icon: "01d" }],
      wind: { speed: 3.5 },
      sys: { country: "BR" },
    };

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
          <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>🌍 Detalhes do Clima</h1>
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
          <div style={{ marginTop: "2rem" }}>
            <Link href="/" style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "var(--primary)",
              color: "white",
              borderRadius: "8px",
              fontWeight: "600",
            }}>
              ← Voltar para a busca
            </Link>
          </div>
        </main>

        <footer>
          <p>&copy; 2026 WeatherNow. Desenvolvido com Next.js e OpenWeatherMap API.</p>
        </footer>
      </>
    );
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${chave}&units=metric&lang=pt_br`;
  const resposta = await fetch(url);

  if (!resposta.ok) {
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
          <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>🔍 Cidade não encontrada</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Desculpe, não conseguimos encontrar dados meteorológicos para "{name}".
          </p>
          <Link href="/" style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--primary)",
            color: "white",
            borderRadius: "8px",
            fontWeight: "600",
          }}>
            ← Voltar para a página principal
          </Link>
        </main>

        <footer>
          <p>&copy; 2026 WeatherNow. Desenvolvido com Next.js e OpenWeatherMap API.</p>
        </footer>
      </>
    );
  }

  const dados = await resposta.json();

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
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>🌍 Detalhes do Clima</h1>

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

        <div style={{ marginTop: "2rem" }}>
          <Link href="/" style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "var(--primary)",
            color: "white",
            borderRadius: "8px",
            fontWeight: "600",
          }}>
            ← Voltar para a busca
          </Link>
        </div>
      </main>

      <footer>
        <p>&copy; 2026 WeatherNow. Desenvolvido com Next.js e OpenWeatherMap API.</p>
      </footer>
    </>
  );
}
