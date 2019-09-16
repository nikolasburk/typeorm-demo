import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique, OneToMany, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @Column()
  title: string

  @Column({ nullable: true })
  content: string

  @Column({ default: true })
  published: boolean

  @ManyToOne(type => User, user => user.posts)
  author: User
}
