
'use client';
import styles from './page.module.scss'
import Image from "next/image";
import gsap from 'gsap';

import {
    floating1,
    floating2,
    floating3,
    floating4,
    floating5,
    floating6,
    floating7,
    floating8,
    floating9,
    floating10,
    floating11,
    floating12
} from '../data'
import { useRef } from 'react';

export default function Home() {

  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const plane4 = useRef(null);

  const speed = 0.01;

  let xForce = 0;
  let yForce = 0;

  let requestAnimationFrameId = null;

  let easing = 0.08

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(!requestAnimationFrameId){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing)
    yForce = lerp(yForce, 0, easing)

    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})
    gsap.set(plane4.current, {x: `+=${xForce * 0.1}`, y: `+=${yForce * 0.1}`})
    
    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;

    if(xForce > 0 || yForce > 0){
      requestAnimationFrame(animate);
    }else{
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  }

  return (
    <main onMouseMove = {(e) => {manageMouseMove(e)}} className={styles.main}>
      <div ref={plane1} className={styles.plane}>
        <Image
        alt="image"
        src={floating1}
        width={250}
        />
         <Image
        alt="image"
        src={floating2}
        width={300}
        />
         <Image
        alt="image"
        src={floating3}
        width={300}
        />
      </div>

      <div ref={plane2} className={styles.plane}>
        <Image
        alt="image"
        src={floating4}
        width={300}
        />
         <Image
        alt="image"
        src={floating5}
        width={300}
        />
         <Image
        alt="image"
        src={floating6}
        width={300}
        />
      </div>

      <div ref={plane3} className={styles.plane}>
        <Image
        alt="image"
        src={floating7}
        width={300}
        />
         <Image
        alt="image"
        src={floating8}
        width={300}
        />
         <Image
        alt="image"
        src={floating9}
        width={150}
        />
      </div>

     {/* <div ref={plane4} className={styles.plane}>
        <Image
        alt="image"
        src={floating10}
        width={150}
        />
         <Image
        alt="image"
        src={floating11}
        width={150}
        />
         <Image
        alt="image"
        src={floating12}
        width={300}
        />
     </div> */}
      <div className={styles.title}>
        <h1>Floating Images Gallery</h1>
        <p>Next.js and GSAP</p>
      </div>
    </main>
  );
}
