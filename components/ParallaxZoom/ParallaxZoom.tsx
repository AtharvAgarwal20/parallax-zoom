import Bush from '../Bush/Bush'
import Sea from '../Sea/Sea'
import styles from './zoom.module.scss'

export default function ParallaxZoom() {
    return (
        <main className={styles.container}>
            <Sea />
            <Bush />
        </main>
    )
}