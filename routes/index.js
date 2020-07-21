var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:kid_pem', async function(req, res, next) {
  res.send('MIIBCgKCAQEAtjEX+kvOIyWFouO2X7avsurz+/9srEg47U/Jtq5iAGeSl7wldtOBVp2gPOoe89KRRHz4wfvy470km9kr7+EEbTMgKnNoHN1oIyZMelxQoDSw7xmpfymSE//svfd72Jrw37jweM+KXGmtMp4h3BI2oZEHrw+cNVvy1fAGmjbolBQRtQFQvS2aIfAbQyYHaI4of+qNc8cRf4N311F5vZieuYrjCdd3R65r+SpJPyKaiIaPy+zXHEIznfXWrB5U/BGKWODFvZLHgnmy6/7OcmgbC01F1tSm+/r+/uc9m+BtNdu0GhU2hfCSURwa26+Ty/vwW80Y9Mm6bt/ajq6TAC/R0QIDAQAB');
});

module.exports = router;
