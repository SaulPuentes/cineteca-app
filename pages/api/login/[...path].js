import { createUser, getUser } from './user'

export default async(req, res) => {

  if (req.body.path == 'signup') {
    const result = await createUser(req.body.email, req.body.password)
    res.statusCode = 200
    res.json(result)
  } else if (req.body.path == 'signin'){
    const result = await getUser(req.body.email, req.body.password)
    res.statusCode = 200
    res.json(result)
  }
}