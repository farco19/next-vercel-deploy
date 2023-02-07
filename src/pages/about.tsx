import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';


export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>About</h1>
        <Link href='/'>Ir al Home</Link>
      </MainLayout>
    </>
  )
}
