let express = require('express'),
    traveler = require('../controllers/travelers'),
    router = express.Router();

router.post('/coordinate', traveler.addTraveler);

//get traveler daily routes
router.get('/summary/:id', traveler.getSummary);

//get traveler last location
router.get('/traveler/route/:id', traveler.getLastLocation);


module.exports = router;