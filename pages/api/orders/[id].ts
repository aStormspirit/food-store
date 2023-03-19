const handler = async (req, res) => {

    const {
      method,
      query: { id },
    } = req;
  

    if (method === "GET") {
      try {
        console.log('1')

      } catch (err) {
        res.status(500).json(err);
      }
    }
  };
  
export default handler;