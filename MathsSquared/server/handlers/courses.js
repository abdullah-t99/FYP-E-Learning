const con = require("../database/index");

module.exports = async (req, res, next) => {
  const getCourses = () => "SELECT * FROM Courses";
  try {
    con.query(await getCourses(), (err, rows) => {
      if (err) {
        throw err;
      }
      return res.status(200).json({ rows });
    });
  } catch (err) {
    next(err);
  }
};
