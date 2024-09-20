import styles from './banner-styles.module.css';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className={styles.banner}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/whyme" className={styles.link}>Why Me</Link>
        <Link className={styles.link} href="/contact">Contact</Link>
    </div>
  );
};

export default Banner;
