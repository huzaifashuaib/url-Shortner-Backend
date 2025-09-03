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
    vistorHistory: [],
  });
  return res.status(201).json({
    id: shortID,
    msg: `Url Created and url Id is ${shortID}`,
  });
};

const handleGetUrl = async (req, res) => {
  const urlID = req.params.urlId;
  console.log(urlID);
  if (!urlID) {
    return res.json({ msg: "url ID missing" });
  }
  const entry = await url.findOneAndUpdate(
    { shortUrl: urlID },
    {
      $push: {
        vistorHistory: [
          {
            timestamp: Date.now(),
          },
        ],
      },
    }
  );
  console.log(entry);
  res.redirect(entry.urlRedirect);
};

const handleGetAnalystics = async (req, res) => {
  const id = req.params.urlId;
  const result = await url.findOne({ shortUrl: id });
  console.log(result);
  return res.json({
    msg: `how manay clicks ${result.vistorHistory.length}`,
  });
};

module.exports = {
  handleGenerateNewShorterUrl,
  handleGetUrl,
  handleGetAnalystics,
};
