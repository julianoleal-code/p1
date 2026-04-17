// Esse componente mostra as informações do clima de uma cidade
// Recebe os dados do clima como props

import Image from "next/image";

// Tipo que define o que esse componente precisa receber
type WeatherCardProps = {
  cidade: string;
  temperatura: number;
  sensacaoTermica: number;
  descricao: string;
  icone: string;
  // Esses campos são opcionais - só aparecem na página da cidade
  umidade?: number;
  vento?: number;
  pais?: string;
};

export default function WeatherCard({
  cidade,
  temperatura,
  sensacaoTermica,
  descricao,
  icone,
  umidade,
  vento,
  pais,
}: WeatherCardProps) {
  // Monta a URL do ícone usando o código retornado da API
  const urlIcone = `https://openweathermap.org/img/wn/${icone}@2x.png`;

  return (
    <div
      style={{
        border: "1px solid #93c5fd",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "400px",
        background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
        color: "white",
        boxShadow: "0 4px 16px rgba(37, 99, 235, 0.4)",
      }}
    >
      <h2 style={{ marginBottom: "4px" }}>
        {cidade} {pais && `(${pais})`}
      </h2>

      {/* Ícone do tempo */}
      <Image
        src={urlIcone}
        alt={descricao}
        width={80}
        height={80}
      />

      {/* Dados principais */}
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        🌡️ {temperatura.toFixed(1)}°C
      </p>
      <p>Sensação térmica: {sensacaoTermica.toFixed(1)}°C</p>
      <p style={{ textTransform: "capitalize" }}>Clima: {descricao}</p>

      {/* Dados extras - aparecem só se forem passados */}
      {umidade !== undefined && <p>💧 Umidade: {umidade}%</p>}
      {vento !== undefined && <p>💨 Vento: {vento} m/s</p>}
    </div>
  );
}
