import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>IMEXB</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{t('becomeAPartner')}</h1>
        <p className={styles.description}>{t('machinary')}</p>
      </main>
    </div>
  );
}
