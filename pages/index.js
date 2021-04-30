import Head from 'next/head'
import Calculator from '../components/calculator'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-center">
      <Head>
        <title>Dragon Calculator</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="flex-1">
        <h1 className="text-4xl mt-14">Sweep Calculator</h1>
        <p className="mt-3 text-xl">Enter dragon level and health percentage</p>
      <Calculator />
      </main>
      <img src="vampy.png" className="self-end pr-6 h-36 mt-14"/>
      <footer className="flex items-center justify-center w-full p-2 text-sm border-t mb-14">
        <a href ="https://github.com/okayjones/dragon-calculator" target="_blank">
          <p>Created by <img src="github.svg" className="inline h-4"/> okayjones</p>
        </a>
      </footer>
    </div>
  )
}
