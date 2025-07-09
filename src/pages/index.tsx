import { NextPage } from 'next'
import Head from 'next/head'
import HelloWorld from '@/components/HelloWorld'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js TypeScript Hello World</title>
        <meta name="description" content="A simple Next.js TypeScript hello world application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <HelloWorld />
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p>🚀 Built with Next.js & TypeScript</p>
          <p>📦 Containerized with Docker & Kaniko</p>
          <p>⚡ Ready for deployment on Vercel</p>
        </div>
      </main>
    </>
  )
}

export default Home
