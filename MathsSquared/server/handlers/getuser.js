const con = require("../database/index");

module.exports = async (req, res, next) => {
  const email = req.query.user;
  con.query("SELECT * FROM users WHERE email = ?", [email], async function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.status(400).json({
        data: "An error has occured",
      });
    } else {
      if (results.length > 0) {
        const comparision = (await email) === results[0].email;
        if (comparision) {
          res.status(200).json({
            data: results,
          });
        } else {
          res.status(204).json({
            data: "email does not match",
          });
        }
      } else {
        res.status(206).json({
          data: "email does not exist",
        });
      }
    }
  });
};
