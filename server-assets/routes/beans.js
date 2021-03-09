const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const { generateOrderNr } = require('../utils/utils');

router.get('/', async (req, res) => {
  const menu = fs.createReadStream('server-assets/data/menu.json');
  menu.pipe(res);
});

router.post('/', async (req, res) => {
  const order = {
    orderNr: generateOrderNr(),
  }

  setTimeout(() => {
    res.send(order);
  }, 2000);
});


module.exports = router