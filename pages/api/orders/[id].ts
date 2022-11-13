const handler = async (req, res) => {

    const {
      method,
      query: { id },
    } = req;
  

    if (method === "GET") {
      try {
        fetch(`http://127.0.0.1:8000/api/order/${id}`)
        .then(res => res.json())
        .then(re => res.status(200).send(re))

      } catch (err) {
        res.status(500).json(err);
      }
    }
  };
  
export default handler;