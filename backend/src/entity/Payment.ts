import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    recipient: string

    @Column()
    amount: number

    @Column()
    date: string

    @Column()
    currency: string

    @Column()
    reference: string

}
