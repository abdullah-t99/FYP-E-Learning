const sessionstorage = require('sessionstorage');

module.exports = async (req, res, next) => {
  try {
    // Obsolete this auth token
    sessionstorage.removeItem("auth_token");

    res.status(200).json({
      message: "Session Deleted"
    });
  } catch (e) {
    next(e);
  }
};
