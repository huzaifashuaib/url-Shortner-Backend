const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    urlRedirect: {
      type: String,
      required: true,
    },
    vistorHistory: [
      {
        timestamp: Number,
      },
    ],
  },
  { timestamps: true }
);

const shortUrl = mongoose.model(ShortUrl, UrlSchema);
module.exports = shortUrl;
