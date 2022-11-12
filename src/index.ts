import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

class App {
  app: Express
  server: any
  port: any
  constructor() {
    dotenv.config()
    this.port = process.env.PORT
    this.app = express()
    this.app.disable('x-powered-by')
    this.app.get('/health', (req: Request, res: Response) => {
      res.send({ status: 'UP' })
    })
  }

  start(): void {
    this.server = this.app.listen(this.port, () => {
      if (process.env.NODE_ENV === 'dev') {
        console.log(
          `⚡️[server]: Server is running at https://localhost:${this.port}`
        )
      }
    })
  }
  stop(): void {
    this.server.close()
  }
}

export default App
