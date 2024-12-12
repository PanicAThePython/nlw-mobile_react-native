import express from "express"
import { routes } from "./routes"
const cors = require('cors');
import { errorHandling } from "./middlewares/error-handling"

const PORT = 3333
const app = express()
// app.use(cors());
app.use(cors({
    origin: "*" // se não funcionar, teste com o boolean false
  }))

app.use(express.json())
app.use(routes)
app.use(errorHandling)
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
app.listen(PORT, "0.0.0.0", () => console.log(`Server is running on port ${PORT}`))
