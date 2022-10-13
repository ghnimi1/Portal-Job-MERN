require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require("./routes/user.route")
const recuiterRoutes = require("./routes/recruiter.route")
const jobRoutes = require("./routes/job.route")
const postuRoutes = require("./routes/postu.route")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())
app.use(express.json());

connectDB()
app.use('/api/users', userRoutes)
app.use('/api/recruiter', recuiterRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/postu', postuRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 4800
app.listen(PORT, () => console.log(`Listening on port `, PORT))