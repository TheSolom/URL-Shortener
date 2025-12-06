import urlModel from "../models/url.js";
import { isShortenedURL, createShortenedId } from "../utils/helpShortURL.js";
import formatShortURL from "../utils/formatShortURL.js";

class error extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const createShortUrl = async (req, res, next) => {
  const { url } = req.body;

  try {
    if (!url) {
      throw new error("URL is required.", 400);
    }

    const clientHost = req.get("host").includes(":")
      ? req.get("host").split(":")[0]
      : req.get("host");

    if (isShortenedURL(url, clientHost)) {
      throw new error("The URL is already shortened.", 400);
    }

    const ShortenedUrl = await urlModel.findOne({ originalUrl: url });

    if (ShortenedUrl) {
      return res.status(200).json(formatShortURL(ShortenedUrl));
    }

    const urlId = await createShortenedId(url);

    const newShortenedUrl = new urlModel({
      shortenId: urlId,
      originalUrl: url,
    });

    await newShortenedUrl.save();

    res.status(201).json(formatShortURL(newShortenedUrl));
  } catch (err) {
    next(err);
  }
};

export const getShortUrl = async (req, res, next) => {
  const { id } = req.params;

  let URL;
  try {
    URL = await urlModel.findOne({ shortenId: id });
  } catch (err) {
    next(err);
  }

  if (!URL) {
    return res.status(404).json({ message: "The short URL doesn't exist." });
  }

  res.status(200).json(formatShortURL(URL));
};

export const visitShortUrl = async (req, res, next) => {
  const { id } = req.params;

  let URL;
  try {
    URL = await urlModel.findOneAndUpdate(
      { shortenId: id },
      { $inc: { visitCount: 1 } }
    );
  } catch (err) {
    next(err);
  }

  if (!URL) {
    return res.status(404).json({ message: "The short URL doesn't exist." });
  }

  res.status(200).json(formatShortURL(URL));
};
