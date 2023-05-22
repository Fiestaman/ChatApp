import auth from "../config/firebase-config.js";

export const VerifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    if (token) {
      const decodeValue = await auth.verifyIdToken(token);
      req.user = decodeValue;
      return next();
    } else {
      req.user = null;
      return next();
    }
  } catch (e) {
    return res.json({ error: `${e}` });
  }
};

export const VerifySocketToken = async (socket, next) => {
  const token = socket.handshake.auth.token;

  try {
    const decodeValue = await auth.verifyIdToken(token);

    if (decodeValue) {
      socket.user = decodeValue;

      return next();
    }
  } catch (e) {
    return next(new Error(`Internal Error: ${e}`));
  }
};
