const router = require("express").Router();

router.use((req, res) => {
  req.status(404).render("404");
});

module.exports = router;
