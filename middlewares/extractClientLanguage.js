const extractClientLanguage = (req, res, next) => {
  let currentLanguage = req.headers['accept-language'] || 'fr';
  currentLanguage = currentLanguage.slice(0, 2);
  req.currentLanguage = currentLanguage;
  next();
};

module.exports = extractClientLanguage;
