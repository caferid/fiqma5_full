import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization
        var decoded = jwt.verify(token, 'memedtegi');
        req.role = decoded.role
        next()
    } catch (error) {
        res.status(401).json({ message: error });
    }
}