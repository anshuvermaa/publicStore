import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'sachin verma',
    email: 'sachin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'anshu verma',
    email: 'anshu@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'amit betal',
    email: 'amit@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'sai vansh',
    email: 'sai@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'DJ BABU',
    email: 'dinesh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
