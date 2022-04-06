const express = require('express');
const router = express.Router();
const {
  getFetchRandomUser,
  getAllUsers,
  getByUuid,
  getUsersByquery,
} = require('../controllers/user');

router.route('/import').get(getFetchRandomUser);
router.route('/').get(getAllUsers).get(getUsersByquery);
router.route('/:id').get(getByUuid);

module.exports = router;
