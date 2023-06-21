const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
  
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.sendStatus(403);
        }
  
        req.user = decoded;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  }

module.exports = authenticateToken;