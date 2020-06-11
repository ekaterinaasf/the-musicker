const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "hello from API" });
});

router.use("/artists", require("./artists"));
router.use("/playlists", require("./playlists"));
router.use("/songs", require("./songs"));

module.exports = router;
