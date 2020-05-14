const con = require("../database/index");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
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
        const comparision = await bcrypt.compare(password, results[0].password);
        const { id, name, email } = results[0];
        if (comparision) {
          res.status(200).json({
            user_email: email,
            user_id: id,
            user_name: name,
          });
        } else {
          res.status(204).json({
            data: "email and password do not match",
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
