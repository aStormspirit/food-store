import axios from "axios"

export default async function handler(req, res) {
    const { method } = req
    const { customer, phone, address, csrftoken, orders_id, total } = JSON.parse(req.body)

    if(method === 'GET'){
        try{
          res.status(200).json({'ok': 'ok'})
        }catch(err){
          res.status(500).json(err)
        }
      }
    if(method === 'POST'){
      try{
        fetch('http://127.0.0.1:8000/api/order',{
          method: 'POST',
          headers: {'Content-Type': 'application/json','X-CSRFToken': csrftoken},
          mode: 'cors', // Do not send CSRF token to another domain.
          body: JSON.stringify({
            "name": customer,
            "phone": phone,
            "address": address,
            "orders": orders_id,
            "total": total,
          })
      }).then(res => res.json())
      .then(re => res.status(201).send(re))

      }catch(err){
        res.status(500).json(err)
      }
    }
}