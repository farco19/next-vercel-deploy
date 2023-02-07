import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { NavBar } from '../NavBar'
import { FC } from 'react';

interface Props{
  children?: React.ReactNode; 
}

export const MainLayout: FC<Props> = ({children}) => {
  return (
    <>
       <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>

      <main className={styles.main}>
      {children}
      </main>
    
    </>
  )
}
