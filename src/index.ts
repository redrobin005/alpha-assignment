import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { Payment } from "./entity/Payment"

const PORT = 3000

// middleware for error handling
function handleError(err, req, res, next){
    res.status(err.statusCode || 500).send({message: err.message})
}

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, async (req: Request, res: Response, next: Function) => {
            try {
                const result = await (new (route.controller as any))[route.action](req, res, next)
                res.json(result)   
            } catch (error) {
                next(error);
            }
        })
    })

    // start express server
    app.use(handleError)
    app.listen(PORT)

    // insert new payment for test
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(Payment, {
    //         recipient: "Joe Bloggs",
    //         currency: "GBP",
    //         amount: 10000,
    //         date: '10/10/2024',
    //         reference: 'Sending my friend money',
    //     })
    // )

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
