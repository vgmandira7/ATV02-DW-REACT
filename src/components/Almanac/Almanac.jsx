import styles from './Almanac.module.css';


export default function Almanac({ forecast }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Almanaque de 15 dias</h3>
        <span className={styles.eyebrow}>QUINZENA</span>
      </div>

      <div className={styles.list}>
        {forecast.map((day, idx) => (
          <div key={idx} className={styles.row}>
            <div className={styles.colDate}>
              <span className={styles.day}>{day.weekday}</span>
              <span className={styles.date}>{day.date}</span>
            </div>
            <div className={styles.colDesc}>{day.description}</div>
            <div className={styles.colRain}>{day.rain_probability}%</div>
            <div className={styles.colTemp}>
              <span className={styles.max}>{day.max}°</span>
              <span className={styles.min}>{day.min}°</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
