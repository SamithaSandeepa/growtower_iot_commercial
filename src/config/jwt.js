module.exports = {
    secret: process.env.JWT_SECRET,
    expiresIn: '15m',
    refreshExpiresIn: '7d',
  };
  