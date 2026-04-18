import Image from "next/image";

type WeatherCardProps = {
  cidade: string;
  temperatura: number;
  sensacaoTermica: number;
  descricao: string;
  icone: string;
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
  const urlIcone = `https://openweathermap.org/img/wn/${icone}@4x.png`;

  return (
    <div style={{
      backgroundColor: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "16px",
      padding: "2rem",
      maxWidth: "450px",
      margin: "0 auto",
      boxShadow: "var(--shadow)",
      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
      color: "white",
    }}>
      <h2 style={{ marginBottom: "0.5rem", fontSize: "1.8rem" }}>
        {cidade} {pais && `(${pais})`}
      </h2>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
        <Image
          src={urlIcone}
          alt={descricao}
          width={120}
          height={120}
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
        />
        <div>
          <p style={{ fontSize: "2.5rem", fontWeight: "700", margin: "0" }}>
            {temperatura.toFixed(1)}°C
          </p>
          <p style={{ margin: "0.25rem 0 0 0", opacity: 0.95 }}>
            Sensação térmica: {sensacaoTermica.toFixed(1)}°C
          </p>
        </div>
      </div>

      <p style={{
        textTransform: "capitalize",
        fontSize: "1.1rem",
        margin: "1rem 0",
        opacity: 0.95,
      }}>
        {descricao}
      </p>

      {umidade !== undefined && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "0.75rem",
          fontSize: "1rem",
        }}>
          <span>💧</span>
          <span>Umidade: {umidade}%</span>
        </div>
      )}

      {vento !== undefined && (
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "1rem",
        }}>
          <span>💨</span>
          <span>Vento: {vento.toFixed(1)} m/s</span>
        </div>
      )}
    </div>
  );
}
