import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

const INSTANCE = process.env.HARPERDB_URL
const TOKEN = process.env.HARPERDB_TOKEN

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end(`Method ${req.method} not allowed`)
  }
  try {
    const request = await fetch(`${INSTANCE}`, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${TOKEN}`,
      },
      body: JSON.stringify({
        operation: 'sql',
        sql: `SELECT * FROM pff.forms WHERE workspace='${req.query.id}' ORDER BY __createdtime__ ASC`,
      }),
    })
    const response = await request.json()
    res.status(200).json(response)
  } catch (error) {
    console.log(`Error to fetch user forms -> ${error}`)
    res.status(500).end(error)
  }
})
