import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Post } from './Post'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updatedAt: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ type: 'date', nullable: true })
  birthdate: string

  @OneToMany(type => Post, post => post.author)
  posts: Post[]
}
