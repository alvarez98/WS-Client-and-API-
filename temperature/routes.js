const express = require('express');
const router = express.Router();
const controllers = require('./controllers')
const ERROR_404 = {
  error: "ResourceNotFound"
}
const ERROR_500 = {
  error: "InternalServerError"
}
const { connection } = require('../app/index')

router.get('/',  (req, res, next) => {
    res.status(200).send({
        message: "temperature"
    })
      
});

// router.route('/temperature')
//     .get(controllers.index)
//     .post(controllers.new);

// router.route('/temperature/:temperature_id')
//     .get(controllers.view)
//     .patch(controllers.update)
//     .put(controllers.update)
//     .delete(controllers.delete);

module.exports = router;
