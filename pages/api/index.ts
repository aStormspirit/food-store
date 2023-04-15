import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //const data = await prisma.product.findFirst()
    return res.status(200).json({ all: 'good' })
  } catch (error) {
    return res.status(500).json(error)
  }
}
