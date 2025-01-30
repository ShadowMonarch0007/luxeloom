import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoutes.js'
import subscriberRouter from './routes/subscriberRoutes.js'
import cartRouter from './routes/cartRoutes.js'

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/subscriber',subscriberRouter)
app.use('/api/cart', cartRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})
app.listen(port, () => console.log(`Server started on PORT : ${port}`))