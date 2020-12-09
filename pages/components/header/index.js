import { useSession } from "next-auth/client"
import styles from './Header.module.scss'

export default function() {
  const [ session, loading ] = useSession()
  return (
    <header className={styles.header}>
      <h1>Cineteca</h1>
      <div>
      {session && (
      <div>
        <p>Signed in as {session.user.email}</p>
        <a href='/api/auth/signOut'>Sign Out</a>
      </div>)}
      {!session && (<a href='/api/auth/login'>Login</a>)}
      </div>
    </header>
  )
}
