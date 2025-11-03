import styles from "./page.module.css";

export default function Home() {
  console.log('Home Page Rendered');
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hola Mundo</h1>
      </main>
    </div>
  );
}
