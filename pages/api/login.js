import { createUser, getUser } from './user'

export default async(req, res) => {

  if (req.body.isNew) {
    const result = await createUser(req.body.email, req.body.password)
    res.statusCode = 200
    res.json(result)
  } else {
    const result = await getUser(req.body.email, req.body.password)
    res.statusCode = 200
    res.json(result)
  }
}