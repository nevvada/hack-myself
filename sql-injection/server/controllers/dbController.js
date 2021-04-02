const { pool } = require('../database/database');

const verifyUser = async (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  const query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";

  try {
    const result = await pool.query(query);

    if (result.rows.length) {
      return res
        .status(200)
        .send(result.rows);
    }

    res
      .status(401)
      .redirect('/');
  } catch (err) {
    console.error(err);
  }
};

module.exports = { verifyUser };
