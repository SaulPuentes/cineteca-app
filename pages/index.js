import Head from 'next/head'
import { Component } from 'react'
import styles from '../styles/Home.module.css'
import { getCities } from './api/cities'
import { DropdownCities } from './components/DropdownCities'

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <form action="/api/login" method="POST">
            <input type="text" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="submit" name="Login" value="Login"/>
          </form>
          <form action="/api/login" method="POST">
            <input type="hidden" name="isNew" value="true" />
            <input type="text" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="submit" name="Signup" value="Signup"/>
          </form>
          <DropdownCities cities={this.props.cities}>
            <label>Choose a city</label>
          </DropdownCities>
        </main>
  
      </div>
    )
  }
}

export async function getStaticProps() {
    const cities = await getCities()
    return {
      props:{
        cities
      }
    }
}