import styles from './Celestial.module.css';
import { translateMoonPhase } from '../../utils/editorialLogic';


export default function Celestial({ weather }) {
  return (
    <section className={styles.section}>
      <span className={styles.eyebrow}>OBSERVAÇÕES CELESTES</span>
      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.label}>FASE LUNAR</span>
          <span className={styles.value}>{translateMoonPhase(weather.moon_phase)}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>NASCER DO SOL</span>
          <span className={styles.value}>{weather.sunrise}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>PÔR DO SOL</span>
          <span className={styles.value}>{weather.sunset}</span>
        </div>
      </div>
    </section>
  );
}
