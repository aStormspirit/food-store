export default async function handler(req, res) {
    const { method } = req

    if(method === 'GET'){
      try{
        res.status(200).json('product/index')
      }catch(err){
        res.status(500).json(err)
      }
    }
  }