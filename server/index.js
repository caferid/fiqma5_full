import express, { json } from 'express'
import cors from "cors"



const app = express()
const port = 3000

import mongoose from 'mongoose'
import { AuthRooter } from './src/router/authRoutes.js'
import { userRooter } from './src/router/userRoutes.js'
app.use(express.json())
app.use(cors())
app.use("/",userRooter)
app.use("/",AuthRooter)


mongoose.connect('mongodb+srv://ferid:OFzSlirfNy5XL3Hm@cluster0.o4zo8na.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log('disconnet !!!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body
//     const user = await User.findOne({ username })
//     if (!user || password !== user.password) {
//       return res.status(401).send("Wrong email or password");
//     } else {
//       const token = jwt.sign({ username: user.username, role: user.role }, "memedtegi")
//       res.status(200).send(token)
//     }
//   }

//   catch (error) {
//     res.status(403).json({ message: error })
//   }
// })
// const authMiddleware = function (req, res, next) {
//   const token = req.headers.authorization
//   var decoded = jwt.verify(token, 'memedtegi');
//   req.role = decoded.role
//   next()
// }
