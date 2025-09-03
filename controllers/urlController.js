const url = require("../models/url.model");
const shortid = require("shortid");
const handleGenerateNewShorterUrl = async (req, res) => {
  const shortID = shortid();
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({
      msg: "URL missing",
    });
  }
  await url.create({
    shortUrl: shortID,
    urlRedirect: body.url,
    vistorHistory: [
      {
        timestamp: Date.now(),
      },
    ],
  });
  return res.status(201).json({
    id: shortID,
    msg: `Url Created and url Id is ${shortID}`,
  });
};

module.exports = {
  handleGenerateNewShorterUrl,
};
