const { pool } = require('../database/database');


const createUser = (req, res, next) => {
  const {
    favorite_color,
    full_name,
    ice_cream_preference,
  } = req.body;

  const insertQuery = {
    text: 'INSERT INTO users (full_name, favorite_color, ice_cream_preference) VALUES($1, $2, $3)',
    values: [full_name, favorite_color, ice_cream_preference],
  };

  pool.query(insertQuery);

  next();
};

module.exports = {
  createUser,
};
