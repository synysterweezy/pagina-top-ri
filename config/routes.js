const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('/results/:id', async (req, res) => {
  try {
    const { id } = req.params
    const response = await axios.get(`http://localhost:7890/doc/${id}`)
    res.render('results', { data: response.data._source.text, filename: response.data._source.filename });

  } catch (error) {
    console.log(error)
    res.render('results', { error: 'Erro ao buscar na biblioteca de documentos' });
  }
});

module.exports = router;