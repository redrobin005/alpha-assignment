import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Payment } from "../entity/Payment"

const paymentFields = ['recipient', 'currency', 'amount', 'date', 'reference']

export class PaymentController {

    private paymentRepository = AppDataSource.getRepository(Payment)

    async all(request: Request, response: Response, next: NextFunction) {
        const payments = await this.paymentRepository.find()

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
        const keys = Object.keys(params)
        keys.forEach(element => {
            if (!paymentFields.includes(element)) throw Error(`${element} is not a valid payment field`)
        });

        const payments = await this.paymentRepository.find({
            where: params
        })

        if (payments.length == 0) throw Error("no payments found with these parameters")

        return payments
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { recipient, currency, amount, date, reference } = request.body;

        // check if any fields are missing/null 
        paymentFields.forEach(element => {
            if (!request.body[element]) throw Error(`${element} cannot be empty or null`)
        });

        // check for valid amount
        if (amount < 0) throw Error('amount must be a positive number')

        // check for valid date
        const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
        if (!regex.test(date)) throw Error('date string must be a valid date in the format dd/mm/yyyy')

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