const { bookConference, contactus } = require('../controllers/hotel.controller');

const router = require('express').Router();

router.post('/bookConference', bookConference);

router.post('/contactus', contactus);
module.exports = router;