import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from './entities/User'
import { Post } from './entities/Post'

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nikolasburk',
  password: 'nikolasburk',
  database: 'orms',
  schema: 'typeorm',
  entities: [User, Post],
  synchronize: true,
  logging: false,
})
  .then(async connection => {
    console.log(`Opened connection: `, connection.isConnected, connection.name)

    let user = new User()
    user.name = 'Alice'
    user.email = 'alice@prisma.io'
    await connection.manager.save(user);

    let post = new Post()
    post.title = 'Hello World'
    post.author = user

    await connection.manager.save(post);
    // console.log('All users from the DB: ', savedUsers)

    connection.close()
    console.log(`Closed connection: `, connection.isConnected, connection.name)
  })
  .catch(error => console.log(error))
