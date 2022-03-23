const router = require("express").Router();

const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
} = require("../../controllers/users-controller");

// Goes to: /api/users- GET, POST
router.route("/").get(getAllUsers).post(createUsers);

// Goes to: /api/users/:id - GET, PUT, DELETE
router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);

// Goes to: /api/users/:userId/friends/:friendId -POST, DELETE
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
