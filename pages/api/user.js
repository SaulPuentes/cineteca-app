import { MongoClient } from 'mongodb'
// NOTE: change url and credentials
const url = "mongodb+srv://admin:d3za9xIZPD7jgpRV@cluster0.qnm8p.mongodb.net/cluster0"

export async function createUser(email, password) {
  const client = await MongoClient.connect(url)
  const db = client.db('cluster0')
  const users = db.collection('users')

  const insertResult = await users.insertOne({ email, password })
  console.log('insertResult: ', insertResult);
  return insertResult.result.ok
}

export async function getUser(email, password) {
  const client = await MongoClient.connect(url)
  const db = client.db('cluster0')
  const users = db.collection('users')

  const findResult = await users.findOne({ email, password })
  if (!findResult)
    return false
  return findResult
}


export default async (req, res) => {
  res.statusCode = 200
  res.json({url: url})
}