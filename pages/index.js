import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css"


export default function Home() {
  return (
      <> <div className={styles.welcomediv}>
          <h1>Welcome to order home page</h1>
      </div></>
       )
}
