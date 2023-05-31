const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  //addAssignment,
  //removeAssignment,
} = require('../../controllers/userController');

// /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// /api/users/:userId
router
.route('/:userId')
.get(getSingleUser)
.delete(deleteUser);

// /api/students/:studentId/assignments
//router.route('/:studentId/assignments').post(addAssignment);

// /api/users/:userId/assignments/:assignmentId
//router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
