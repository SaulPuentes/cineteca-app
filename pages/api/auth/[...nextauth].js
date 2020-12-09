import NextAuth from 'next-auth'
import { session } from 'next-auth/client'
import Providers from 'next-auth/providers'
import { getUser } from '../user'

const options = {
  providers: [
    Providers.Credentials({
      name: 'Mongo Security',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'user@company.com'},
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const user = await getUser(credentials.email, credentials.password)
        return Promise.resolve(user)
      }
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
  },
  debug: true
}

export default (req, res) => NextAuth(req, res, options)
