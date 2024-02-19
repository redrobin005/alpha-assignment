import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Payment } from "../entity/Payment"

export class PaymentController {

    private paymentRepository = AppDataSource.getRepository(Payment)

    async all(request: Request, response: Response, next: NextFunction) {
        const payments = await this.paymentRepository.find()

        if (!payments) throw Error("no payments found")
        
        return payments
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const payment = await this.paymentRepository.findOne({
            where: { id }
        })

        if (!payment) throw Error("payment not found")

        return payment
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { recipient, currency, amount, date, reference } = request.body;

        const payment = Object.assign(new Payment(), {
            recipient,
            currency,
            amount,
            date,
            reference
        })

        return this.paymentRepository.save(payment)
    }

}