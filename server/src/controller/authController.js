import jwt from "jsonwebtoken"
import User from "../model/UserSchema.js"

export const register = async (req, res) => {
    try {
        const { username, password } = req.body

        let user = await User.findOne({ username })
        if (user) {
            return res.status(409).send("Username already exists")
        }

        const newUser = new User({ username, password })
        await newUser.save()
        const token = jwt.sign(
            {
                userId: newUser._id,
                username: newUser.username,
            },
            "memedtegi",
            { expiresIn: "1h" }
        );
        res.status(201).json({ message: "User Created", token });


    } catch (error) {
        res.status(500).json({ message: error })
    }


}
export const login = async (req, res) => {
    try {
        const { username, password } = req.body

        let user = await User.findOne({ username })
        if (!user || password !== user.password) {
            return res.status(401).send("Wrong email or password");
        }else {
            const token = jwt.sign({ username: user.username, role: user.role }, "memedtegi")
            res.status(200).send(token)
          }
    } catch (error) {
        res.status(500).json({ message: error })
    }


}