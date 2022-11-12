import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
app.disable('x-powered-by')
const port = process.env.PORT

app.get('/health', (req: Request, res: Response) => {
  res.send({ status: 'UP' })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

export default app
