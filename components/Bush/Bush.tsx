'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import Image from "next/image";

import styles from './bush.module.scss'

import bush from '@/public/bush.png'

gsap.registerPlugin(ScrollTrigger)

export default function Bush() {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 0.5,
                pin: `.${styles.wrapper}`
            }
        })

        tl.to(`.${styles.bush}`, {
            scaleX: 1.7,
            scaleY: 1.7,
        })

        tl.to(`.${styles.bush}`, {
            y: '-30%',
            ease: 'power1.inOut'
        })
    })

    return (
        <div className={styles.wrapper}>
            <Image
                src={bush}
                alt="bush"
                className={styles.bush}
            />
        </div>
    )
}