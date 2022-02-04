import type { NextComponentType } from 'next'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://andler.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  )
}