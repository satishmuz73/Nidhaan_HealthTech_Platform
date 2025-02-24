const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

exports.checkRole = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.status(403).json({ message: "Access Forbidden" });
    next();
};