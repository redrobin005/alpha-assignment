import "reflect-metadata"
import { DataSource } from "typeorm"
import { Payment } from "./entity/Payment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Payment],
    migrations: [],
    subscribers: [],
})
