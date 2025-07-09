import { useState } from 'react'

interface HelloWorldProps {
  className?: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({ className }) => {
  const [count, setCount] = useState<number>(0)
  const [message, setMessage] = useState<string>('Hello, World!')

  const handleClick = () => {
    setCount(prev => prev + 1)
    const messages = [
      'Hello, World!',
      'Hello, TypeScript!',
      'Hello, Next.js!',
      'Hello, Kaniko!',
      'Hello, Kubernetes!',
      'Hello, Vercel!'
    ]
    setMessage(messages[count % messages.length])
  }

  return (
    <div className={className} style={{
      textAlign: 'center',
      padding: '2rem',
      border: '2px solid #0070f3',
      borderRadius: '12px',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        fontSize: '3rem',
        margin: '0 0 1rem 0',
        color: '#0070f3',
        fontWeight: 'bold'
      }}>
        {message}
      </h1>

      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        margin: '1rem 0'
      }}>
        Welcome to your Next.js TypeScript application!
      </p>

      <button
        onClick={handleClick}
        style={{
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#0051cc'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#0070f3'
        }}
      >
        Click me! ({count})
      </button>

      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        <strong>Build Info:</strong><br />
        Next.js {process.env.NODE_ENV === 'production' ? 'Production' : 'Development'} Mode<br />
        TypeScript Enabled ✅<br />
        Docker Ready 🐳
      </div>
    </div>
  )
}

export default HelloWorld
