const con = require("../database/index");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  const saltRounds = 10;
  const { user_name, user_email, user_password } = req.body;
  const encryptedPassword = await bcrypt.hash(user_password, saltRounds);
  const insertUsers = () =>
    `INSERT INTO Users (name, email, password) VALUES ('${
      req.body.user_name
    }', '${req.body.user_email}', '${encryptedPassword}')`;

  try {
    con.query(await insertUsers(), (err, results) => {
      if (err) {
        throw err;
      }
      return res.status(200).json({ results });
    });
  } catch (err) {
    next(err);
  }
};
