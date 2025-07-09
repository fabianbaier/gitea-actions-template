import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  timestamp: string
  environment: string
  version: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    message: 'Hello from Next.js TypeScript API!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  })
}
