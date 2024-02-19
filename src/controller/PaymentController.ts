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

    async filtered(request: Request, response: Response, next: NextFunction) {
        const params = request.query

        // check if param exists in Payment entity
        const payment_fields = ['recipient', 'currency', 'amount', 'date', 'reference']
        const keys = Object.keys(params)
        keys.forEach(element => {
            if(!payment_fields.includes(element)) throw Error (`${element} is not a valid payment field`)
        });

        const payments = await this.paymentRepository.find({
            where: params
        })

        if (payments.length == 0) throw Error("no payments found with these parameters")

        return payments
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