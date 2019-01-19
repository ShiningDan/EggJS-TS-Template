import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export default class Greeting {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  greeting: string

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  update_at: Date
}
