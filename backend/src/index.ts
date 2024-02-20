import { AppDataSource } from "./data-source"
import app from './app'
import { port } from "./config"


// initialise DB
AppDataSource.initialize().then(async () => {
    // start express server
    app.listen(port)
    console.log(`Express server has started on port ${port}. Open http://localhost:${port}/payments to see results`)

}).catch(error => console.log(error))
