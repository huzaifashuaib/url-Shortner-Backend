const express = require("express");
const {
  handleGenerateNewShorterUrl,
  handleGetAnalystics,
  handleGetUrl,
} = require("../controllers/urlController");
const router = express.Router();

router.post("/", handleGenerateNewShorterUrl);
router.get("/:urlId", handleGetUrl);
router.get("/analytic/:urlId", handleGetAnalystics);

module.exports = router;
