import styles from './CurrentWeather.module.css';
import { getEditorialPhrase } from '../../utils/editorialLogic';


export default function CurrentWeather({ weather }) {
  const { title, desc } = getEditorialPhrase(
    weather.condition_slug,
    weather.city_name,
    weather.temp
  );

  return (
    <section className={styles.container}>
      <div className={styles.mainColumn}>
        <div className={styles.eyebrow}>EDITORIAL — MANHÃ DE SEGUNDA</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{desc}</p>
      </div>

      <div className={styles.tempColumn}>
        <div className={styles.temperature}>
          {weather.temp}
          <span className={styles.degree}>°</span>
        </div>
        <div className={styles.conditionLabel}>CONDIÇÃO ATUAL</div>
        <div className={styles.conditionText}>{weather.description}</div>
      </div>
    </section>
  );
}
