import axios from "axios"

export default async function handler(req, res) {
    const { method } = req
    //const { customer, phone, address, csrftoken, orders_id, total } = JSON.parse(req.body)

    if(method === 'GET'){
        try{
          res.status(200).json({'ok': 'ok'})
        }catch(err){
          res.status(500).json(err)
        }
      }
    if(method === 'POST'){
      try{
        console.log('ok')

      }catch(err){
        res.status(500).json(err)
      }
    }
}