const { app, cors, express, port} = require('./src/config/app/appConfig')
const userRoutes = require('./src/routes/user.routes')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.json())
app.use(cors)
app.use('/', userRoutes)
app.get('/', (req, res) => {
  return res.json("home")
})
app.listen(port, () => {
  console.log(`Aplicação na porta: ${port}`)
})