const router = require('express').Router();
const customerController = require('../controllers/customerController');

router.get('/',customerController.getCustomers);
router.post('/',customerController.createCustomer);

module.exports = router;