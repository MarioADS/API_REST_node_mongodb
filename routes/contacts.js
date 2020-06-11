const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts-controller');

router.get('/read-contacts',contactsController.read_contacts);
router.post('/add-contacts',contactsController.add_contacts);
router.delete('/del-contacts/:id',contactsController.delete_contacts);
router.put('/upd-contacts/:id',contactsController.update_contacts);

module.exports = router;