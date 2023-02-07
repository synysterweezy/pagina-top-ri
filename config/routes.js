const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('/results/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const response = await axios.get(`http://localhost:7890/doc/${id}`);
    //const json = JSON.parse(response.data)
    console.log('deu certo', response.data)
    res.render('results', { data:response.data._source.text, filename:response.data._source.filename   });

  } catch (error) {
    console.log(error)
    res.render('results', { error: 'Erro ao buscar na biblioteca de documentos' });
  }
});

module.exports = router;