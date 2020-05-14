const con = require("../database/index");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  const saltRounds = 10;
  const { id, name, email, password } = req.body;
  let userid = parseInt(id);
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  const insertUsers = () =>
    `UPDATE Users SET password = password  WHERE id = 10`;

  try {
    con.query("SELECT * FROM Users WHERE id = ?", [userid], function(
      err,
      results
    ) {
      if (results[0]) {
        con.query("UPDATE Users SET ? WHERE id = ?", [
          { password: encryptedPassword },
          userid,
        ]);
      }
      return res.status(200).json({ results });
    });
  } catch (err) {
    next(err);
  }
};
