"use client"
import Link from 'next/link'
import React, { ReactNode } from 'react'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation';
interface SubItem {
    title: string;
    path: string;
    icon: ReactNode; // ReactNode can be used to represent any valid JSX element
  }
export default function MenuLink({menu}:Readonly<{
    menu: SubItem;
  }>) {
  const pathname = usePathname()
  return (
    <Link href={menu.path} className={`${styles.container} ${pathname === menu.path && styles.active}`}>
      {menu.icon}
      {menu.title}
    </Link>
  )
}
