let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send('You are not allow to add data, you are not an admin!');
  }

  next();
};

module.exports = { admin };
