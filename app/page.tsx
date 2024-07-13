import AnimatedSquare from '@/components/AnimatedSquare/AnimatedSquare';

import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.container} >
      <div className={styles.div1}></div>
      <div className={styles.div2}></div>
      <div className={styles.div3}>
        <AnimatedSquare />
      </div>
      <div className={styles.div4}></div>
    </main>
  );
}
