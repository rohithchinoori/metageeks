// timestamp.js

module.exports = (req, res, next) => {
  console.log(`Timestamp: ${new Date().toISOString()}, URL: ${req.url}`);
  next();
};
