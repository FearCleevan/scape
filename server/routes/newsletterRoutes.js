const express = require('express');
const router = express.Router();
const {
  subscribe,
  verify,
  unsubscribe,
  sendNewsletter
} = require('../controllers/newsletterController');

router.post('/subscribe', subscribe);
router.get('/verify-newsletter', verify);
router.get('/unsubscribe', unsubscribe);
router.post('/send-newsletter', sendNewsletter);

module.exports = router;