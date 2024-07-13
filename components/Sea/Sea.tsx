'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import Image from "next/image";

import styles from './sea.module.scss'

import sea from '@/public/sea.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function Sea() {
    useGSAP(() => {
        gsap.to(`.${styles.sea}`, {
            scaleX: 1.3,
            scaleY: 1.3,
            scrollTrigger: {
                scrub: 0.5,
                pin: `.${styles.wrapper}`
            }
        })
    })
    return (
        <main className={styles.wrapper}>
            <Image
                src={sea}
                alt="sea"
                className={styles.sea}
            />
        </main>
    )
}