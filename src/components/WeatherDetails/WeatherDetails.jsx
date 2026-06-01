import styles from './WeatherDetails.module.css';

// Recebe o objeto weather via props e exibe detalhes meteorológicos
export default function WeatherDetails({ weather }) {
  return (
    <div className={styles.grid}>
      <div className={styles.item}>
        <span className={styles.label}>UMIDADE RELATIVA</span>
        <span className={styles.value}>{weather.humidity}%</span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>DINÂMICA DO VENTO</span>
        <span className={styles.value}>{weather.wind_speedy}</span>
        <span className={styles.sub}>DIREÇÃO {weather.wind_cardinal}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>NEBULOSIDADE</span>
        <span className={styles.value}>{weather.cloudiness}%</span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>PRECIPITAÇÃO</span>
        <span className={styles.value}>{weather.rain} mm</span>
      </div>
    </div>
  );
}
