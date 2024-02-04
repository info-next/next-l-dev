"use client"
import React from 'react';
import Links from './links/Links';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>logo</Link>
        <div>
           <Links/>
        </div>
    </div>
  )
}

export default Navbar