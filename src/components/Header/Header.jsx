import styles from './Header.module.css';


export default function Header({ city, date, time }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Crônica do Tempo</h1>
      <div className={styles.meta}>
        <span>{city.toUpperCase()}</span>
        <span>{date}</span>
        <span>EDIÇÃO {time}</span>
      </div>
    </header>
  );
}
