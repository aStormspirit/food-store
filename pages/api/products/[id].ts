export default async function handler(req, res) {
    const { method, query: {id} } = req

    if(method === 'GET'){
      try{
        res.status(200).json('products/api')
      }catch(err){
        res.status(500).json(err)
      }
    }
  }