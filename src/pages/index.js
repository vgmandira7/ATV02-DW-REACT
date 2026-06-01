import Head from "next/head";
import WeatherDashboard from "../components/WeatherDashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crônica do Tempo</title>
        <meta
          name="description"
          content="Previsão do tempo com estilo editorial — Atividade 02 DW III"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="app-container">
        <WeatherDashboard />
      </div>
    </>
  );
}