const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/ErrorHandling');


const verification = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            throw new ErrorHandler(401, "Authorization token is required");
        }

        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                console.log(err , "errrrrrrrrrrrr")
                throw new ErrorHandler(403, "Invalid or expired token");
            }
            console.log(user ,"us")
            req.user = decoded;
            next()
            // res.status(200).send({ status: "001", message: "Token is valid", verified: decoded });
        });
    } catch (error) {
        console.error("Error during token verification:", error);
        next(error);
    }
};



module.exports = verification