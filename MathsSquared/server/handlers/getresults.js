const con = require("../database/index");

module.exports = async (req, res, next) => {
  con.query(
    "SELECT * FROM Results WHERE id = ?",
    [req.query.user],
    async function(error, results, fields) {
      if (error) {
        res.status(400).json({
          data: "An error has occured",
        });
      } else {
        if (results.length > 0) {
          const comparision =
            (await parseInt(req.query.user)) === results[0].id;

          if (comparision) {
            res.status(200).json({
              results,
            });
          } else {
            res.status(204).json({
              data: "user has no results",
            });
          }
        } else {
          res.status(206).json({
            data: "user does not exist",
          });
        }
      }
    }
  );
};
