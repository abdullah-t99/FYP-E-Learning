const con = require("../database/index");

module.exports = async (req, res, next) => {
  const { results, quiz_name, id } = req.body;

  const insertResults = () =>
    `INSERT INTO Results (id, quiz_name, quiz_result) VALUES ('${id}', '${quiz_name}', '${results}')`;

  try {
    con.query(await insertResults(), (err, results) => {
      if (err) {
        throw err;
      }
      return res.status(200).json({ data: results });
    });
  } catch (err) {
    next(err);
  }
};
