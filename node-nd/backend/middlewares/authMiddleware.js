// we can use this middleware on any request, any router that needs authentication

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = payload;
    next(); // move to the next function
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
};

module.exports = {
  authMiddleware,
};
