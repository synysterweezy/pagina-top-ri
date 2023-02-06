const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
res.send('Página principal do site');
});
module.exports = router;