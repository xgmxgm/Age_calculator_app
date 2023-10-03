import { AdviceCard } from '@/widgets/AdviceCard';

import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main__app}>
      <AdviceCard />
    </div>
  )
}