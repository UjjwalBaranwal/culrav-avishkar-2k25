const crypto = require("crypto");

const getRandomToken = (size = 32) => {
  return crypto.randomBytes(size).toString("hex");
};

const hashToken = (token) => {
  // SHA256 hex: safe to store
  return crypto.createHash("sha256").update(token).digest("hex");
};

module.exports = { getRandomToken, hashToken };
