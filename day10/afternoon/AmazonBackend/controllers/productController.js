const getAllProducts = async (req, res) => {
  res.send({
    status: 'success',
    result: 0,
    data: {
        products: []
    }
  })
}

module.exports = { getAllProducts }