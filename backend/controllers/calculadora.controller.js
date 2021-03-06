var express = require('express');
var router = express.Router();
const CalculadoraService = require('../services/calculadora.service')

router.post('/', async (req, res, next) => {
  const resposta = await CalculadoraService.executarCalculos(req.body)
  res.json(resposta)
});

module.exports = router;