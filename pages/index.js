import Head from 'next/head'
import Calculator from '../components/calculator'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 mt-24">
      <Head>
        <title>Dragon Calculator</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <h1 className="text-4xl">Dragon Calculator</h1>
        <p className="mt-3 text-xl">Some description of whatever here</p>
      </main>
      <Calculator />
    </div>
  )
}
