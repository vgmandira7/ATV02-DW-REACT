import styles from './Highlights.module.css';

const expandWeekday = (weekday) => {
  const map = {
    Seg: 'Segunda-feira', Ter: 'Terça-feira', Qua: 'Quarta-feira',
    Qui: 'Quinta-feira', Sex: 'Sexta-feira', Sáb: 'Sábado', Dom: 'Domingo',
  };
  return map[weekday] || weekday;
};

// Ilustração SVG embutida no código — sem dependência de imagens externas
const WeatherVisual = ({ condition }) => {
  const config = {
    rain: {
      gradient: 'linear-gradient(160deg, #2c3e50 0%, #4286f4 100%)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 44C18 34 26 27 36 27C38 21 44 17 52 17C61 17 69 25 69 34C69 44 61 49 52 49H23C20 49 18 47 18 44Z" fill="white" fillOpacity="0.75"/>
          <line x1="28" y1="55" x2="24" y2="67" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="40" y1="57" x2="36" y2="69" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="52" y1="55" x2="48" y2="67" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="64" y1="57" x2="60" y2="69" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    cloud: {
      gradient: 'linear-gradient(160deg, #757F9A 0%, #b8c6db 100%)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 50C12 40 20 33 30 33C32 27 38 23 46 23C56 23 64 31 64 40C64 50 56 55 46 55H17C14 55 12 53 12 50Z" fill="white" fillOpacity="0.85"/>
          <path d="M52 52C52 46 57 42 64 42C68 42 72 45 72 50C72 55 68 58 64 58H54C53 58 52 57 52 52Z" fill="white" fillOpacity="0.5"/>
        </svg>
      ),
    },
    clear_day: {
      gradient: 'linear-gradient(160deg, #f7971e 0%, #ffd200 100%)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="15" fill="white" fillOpacity="0.95"/>
          <line x1="40" y1="9" x2="40" y2="17" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="40" y1="63" x2="40" y2="71" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="9"  y1="40" x2="17" y2="40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="63" y1="40" x2="71" y2="40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="18" y1="18" x2="24" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="56" y1="56" x2="62" y2="62" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="62" y1="18" x2="56" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="24" y1="56" x2="18" y2="62" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
    cloudly_day: {
      gradient: 'linear-gradient(160deg, #89a4c7 0%, #c9d6df 100%)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="30" r="11" fill="white" fillOpacity="0.65"/>
          <line x1="28" y1="13" x2="28" y2="17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="28" y1="43" x2="28" y2="47" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="11" y1="30" x2="15" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="41" y1="30" x2="45" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M28 46C28 38 35 32 44 32C49 27 56 24 63 24C71 24 77 31 77 39C77 47 71 51 63 51H33C30 51 28 49 28 46Z" fill="white" fillOpacity="0.85"/>
        </svg>
      ),
    },
  };

  const visual = config[condition] || config['cloud'];

  return (
    <div className={styles.weatherVisual} style={{ background: visual.gradient }}>
      <div className={styles.icon}>{visual.icon}</div>
    </div>
  );
};

// Componente de lista — recebe array forecast via props e exibe os 3 próximos dias
export default function Highlights({ forecast }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>PROJEÇÕES</span>
        <h3 className={styles.title}>Três dias em destaque</h3>
      </div>

      <div className={styles.grid}>
        {forecast.map((day, idx) => (
          <div key={idx} className={styles.card}>
            <WeatherVisual condition={day.condition} />

            <div className={styles.cardHeader}>
              <h4 className={styles.dayName}>{expandWeekday(day.weekday)}</h4>
              <span className={styles.date}>{day.date}</span>
            </div>

            <div className={styles.stats}>
              <div className={styles.temp}>
                <span className={styles.max}>{day.max}°</span>
                <span className={styles.min}>{day.min}</span>
              </div>
              <div className={styles.rainBadge}>{day.rain_probability}% CHUVA</div>
            </div>

            <p className={styles.desc}>
              {day.description}. Acompanhe as mudanças atmosféricas para este dia.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
