import { Entity, Check, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
@Check('"amount" > 0')
export class Payment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    recipient: string

    @Column("decimal", { precision: 10, scale: 2 })
    amount: number
    
    @Column()
    date: string

    @Column()
    currency: string

    @Column()
    reference: string

}
