import { TestAppDataSource } from "../src/data-source";
import { Payment } from "../src/entity/Payment";

let paymentRepository
const testPayment = {
    recipient: "Jane Bloggs",
    currency: "EUR",
    amount: 20000,
    date: "11/10/2024",
    reference: "Sending money to savings"
}

beforeAll(async () => {
    await TestAppDataSource.initialize().then(async () => {
        paymentRepository = TestAppDataSource.getRepository(Payment)
    })
    console.log('SQLite DB connected!');
})

afterAll(() => {
    TestAppDataSource.destroy()
})

// happy path
it('should be no payments initially', async () => {
    const payments = await paymentRepository.find()
    expect(payments).toEqual([])
})

it('should create a payment', async () => {
    const paymentToPost = Object.assign(new Payment(), testPayment)
    const paymentCreated = await paymentRepository.save(paymentToPost)
    expect(paymentCreated).toEqual({
        "amount": 20000,
        "currency": "EUR",
        "date": "11/10/2024",
        "id": 1, 
        "recipient": "Jane Bloggs",
        "reference": "Sending money to savings"
    })
})

it('should filter on metadata to give specific payment(s)', async () => {
    const paymentToPost2 = Object.assign(new Payment(), {...testPayment, recipient: "Bob Bloggs", currency: "GBP"})
    await paymentRepository.save(paymentToPost2)
    const paymentToPost3 = Object.assign(new Payment(), {...testPayment, recipient: "Billy Bloggs", currency: "GBP"})
    await paymentRepository.save(paymentToPost3)
    const paymentToPost4 = Object.assign(new Payment(), {...testPayment, reference: "Sending money abroad", currency: "JPY"})
    await paymentRepository.save(paymentToPost4)

    const payments = await paymentRepository.find({
        where: {
            currency: "GBP"
        }
    })
    expect(payments.length).toBe(2)
})

// unhappy path
it('should not create a payment with null fields', async () => {
    const paymentToPost5 = Object.assign(new Payment(), {...testPayment, reference: null})
    try {
        await paymentRepository.save(paymentToPost5)
      } catch (error) {
        expect(String(error)).toEqual('QueryFailedError: SQLITE_CONSTRAINT: NOT NULL constraint failed: payment.reference');
      }
})

it('should not create a payment with missing fields', async () => {
    const paymentToPost6 = Object.assign(new Payment(), {recipient: 'Joe'})
    try {
        await paymentRepository.save(paymentToPost6)
      } catch (error) {
        expect(String(error)).toEqual('QueryFailedError: SQLITE_CONSTRAINT: NOT NULL constraint failed: payment.amount');
      }
})

it('should not create a payment amount with a negative amount', async () => {
    const paymentToPost7 = Object.assign(new Payment(), {...testPayment, amount: -50})
    try {
        const payment = await paymentRepository.save(paymentToPost7)
      } catch (error) {
        expect(String(error)).toEqual('QueryFailedError: SQLITE_CONSTRAINT: CHECK constraint failed: CHK_d31224863e28c3085e252aa061');
      }
})
