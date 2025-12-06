import { nanoid } from "nanoid";

import urlModel from "../models/url.js";

export const isOurShortenedURL = (url, clientHost) => {
  let { host } = new URL(url);
  host = host.includes(":") ? host.split(":")[0] : host;

  return host === clientHost;
};

export const isShortenedURL = (url, clientHost) => {
  const SHORT_URL_REGEX =
    /^(http:\/\/|https:\/\/)(bit\.ly|goo\.gl|t\.co|tinyurl\.com|ow\.ly|owly\.st|is\.gd|fb\.me|tr\.im|j\.mp|cli\.gs|2\.ly|u\.to|soo\.gd|s2r\.co|shorte\.st|adcrun\.ch|bc\.vc|t2m\.io|tiny\.cc|adf\.ly|shorte\.st|sh\.st|rebrandly\.com|buff\.ly|bc\.vc|v\.gd|cutt\.us|shar\.es|tr\.tt)(\/[a-zA-Z0-9\_\-]+)?(\/[a-zA-Z0-9\_\-]+)?$/;

  return SHORT_URL_REGEX.test(url) || isOurShortenedURL(url, clientHost);
};

export const createShortenedId = async () => {
  let urlId;
  do {
    urlId = nanoid(8);
  } while ((await urlModel.exists({ shortenId: urlId })) !== null);

  return urlId;
};
