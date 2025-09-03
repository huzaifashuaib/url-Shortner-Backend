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

const shortUrl = mongoose.model("url", UrlSchema);
module.exports = shortUrl;
