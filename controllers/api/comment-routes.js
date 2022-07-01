const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    Comment.create({ ...req.body, userId: req.session.userId })
        .then(newComment => {
            res.json(newComment);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});
router.get("/", (req, res) => {
    // Find All Comments
    Comment.findAll()
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(500), json(err);
      });
  });
module.exports = router;