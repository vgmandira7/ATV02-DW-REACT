'use client';

import { useState, useEffect } from 'react';
import Header from './Header/Header';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import WeatherDetails from './WeatherDetails/WeatherDetails';
import Highlights from './Highlights/Highlights';
import Almanac from './Almanac/Almanac';
import Celestial from './Celestial/Celestial';
import mockData from '../utils/mockData.json';


export default function WeatherDashboard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        
        const response = await fetch(
          'https://api.hgbrasil.com/weather?city_name=Sao_Paulo,SP&key=51b6c5ed&format=json-cors'
        );
        const data = await response.json();

        
        const results = data?.results;
        if (results?.temp && results?.forecast?.length >= 3) {
          setWeather(results);
        } else {
          setWeather(mockData.results);
        }
      } catch (error) {
        console.error('Erro ao buscar API, utilizando dados de fallback (mock).', error);
        
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
      
      <Header city={weather.city} date={weather.date} time={weather.time} />

      <main>
      
        <CurrentWeather weather={weather} />

        
        <WeatherDetails weather={weather} />

        
        <Highlights forecast={weather.forecast.slice(0, 3)} />
        <Almanac forecast={weather.forecast} />

        <Celestial weather={weather} />
      </main>
    </>
  );
}
