const express = require("express");
const { handleGenerateNewShorterUrl } = require("../controllers/urlController");
const router = express.Router();

router.post("/", handleGenerateNewShorterUrl);

module.exports = router;
