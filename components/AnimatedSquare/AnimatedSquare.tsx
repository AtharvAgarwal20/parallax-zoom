'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import styles from './square.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedSquare() {
    useGSAP(() => {
        // const square = document.querySelector(`.${styles.square}`);
        gsap.to(`.${styles.square}`, {
            x: 700,
            rotateZ: '360',
            scrollTrigger: {
                trigger: `.${styles.square}`,
                start: 'top center',
                toggleActions: 'restart pause reverse pause',
                markers: true,
                scrub: 3,
                pin: true
            }
        })
    })
    return (
        <div className={styles.square}></div>
    )
}