import { prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
    const { method, query: {id} } = req

    if(method === 'GET'){
      try{
        const food = await prisma.food.findUnique({
          where: {
            id: id,
          },
        })
        res.status(200).json(food)
      }catch(err){
        console.log('err')
        res.status(500).json(err)
      }
    }
  }