const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// update comments with replies and delete comments
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// delete a reply to a comment
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
