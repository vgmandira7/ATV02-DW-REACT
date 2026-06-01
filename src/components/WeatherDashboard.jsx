'use client';

import { useState, useEffect } from 'react';
import Header from './Header/Header';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import Highlights from './Highlights/Highlights';
import Almanac from './Almanac/Almanac';
import Celestial from './Celestial/Celestial';
import mockData from '../utils/mockData.json';

// Client Component — necessário para usar useState e useEffect no Next.js App Router
export default function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Tentativa de buscar da API real
        const response = await fetch(
          'https://api.hgbrasil.com/weather?city_name=Sao_Paulo,SP&key=51b6c5ed&format=json-cors'
        );
        const data = await response.json();

        // Verifica se a API retornou dados válidos COM forecast completo (mínimo 3 dias)
        const results = data?.results;
        if (results?.temp && results?.forecast?.length >= 3) {
          setWeather(results);
        } else {
          setWeather(mockData.results);
        }
      } catch (error) {
        console.error('Erro ao buscar API, utilizando dados de fallback (mock).', error);
        // Fallback garantido para a atividade nunca ficar em branco
        setWeather(mockData.results);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Inter' }}>
        Aguardando os ventos trazerem as informações...
      </div>
    );
  }

  if (!weather) return null;

  return (
    <>
      {/* Dados passados via props — Header recebe city, date e time */}
      <Header city={weather.city} date={weather.date} time={weather.time} />

      <main>
        {/* Componente de registro único — condição atual */}
        <CurrentWeather weather={weather} />

        {/* Dados detalhados passados via props */}
        <WeatherDetails weather={weather} />

        {/* Componentes de lista — forecast dos próximos dias */}
        <Highlights forecast={weather.forecast.slice(0, 3)} />
        <Almanac forecast={weather.forecast} />

        <Celestial weather={weather} />
      </main>
    </>
  );
}
