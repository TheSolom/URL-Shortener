export default (shortURL) => {
  return {
    id: shortURL.shortenId,
    originalURL: shortURL.originalUrl,
    visitCount: shortURL.visitCount,
  };
};
