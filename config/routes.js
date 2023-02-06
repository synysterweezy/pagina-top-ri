const express = require('express');
const router = express.Router();
const axios = require('axios');




router.get('/search', (req, res) => {
    const searchTerm = req.query.q;
  
    axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then(apiResponse => {
        res.send(apiResponse.data);
      })
      .catch(error => {
        res.send('Erro: ' + error);
      });
  });

  module.exports = router;