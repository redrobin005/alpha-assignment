import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import * as cors from "cors";
import { Routes } from "./routes"


// middleware for error handling
function handleError(err, req, res, next) {
    res.status(err.statusCode || 500).send({ message: err.message })
}

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

app.use(handleError)

export default app;