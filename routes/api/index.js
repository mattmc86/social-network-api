const router = require("express").Router();

const usersRoutes = require("./user-routes");
const thoughtsRoutes = require("./thought-routes");

// Adding `/users` to created routes
router.use("/users", usersRoutes);

// Adding `/thoughts` to created routes
router.use("/thoughts", thoughtsRoutes);

module.exports = router;
