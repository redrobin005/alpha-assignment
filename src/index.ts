import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import * as cors from "cors";
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"

const PORT = 3000

// middleware for error handling
function handleError(err, req, res, next) {
    res.status(err.statusCode || 500).send({ message: err.message })
}

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use(cors())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, async (req: Request, res: Response, next: Function) => {
            try {
                const result = await (new (route.controller as any))[route.action](req, res, next)
                if (req.method === 'POST') res.status(201)
                res.json(result)
            } catch (error) {
                next(error);
            }
        })
    })

    // start express server
    app.use(handleError)
    app.listen(PORT)

    console.log("Express server has started on port 3000. Open http://localhost:3000/payments to see results")

}).catch(error => console.log(error))
