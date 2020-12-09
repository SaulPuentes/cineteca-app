import { getSession } from 'next-auth/client'
import { Component } from 'react'
import styles from '../styles/Home.module.css'
import { getCities } from './api/cities'
import { DropdownCities } from './components/dropdowncities'
import Header from './components/header'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      locations: []
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <DropdownCities cities={this.props.cities} changes={async (value) => {
              const result = await fetch('/api/city/' + value)
              const json = await result.json()
              this.setState({
                locations: Object.entries(json.d.Locations).map(location => ({
                  key: location[0],
                  name: location[1]
                }))
              })
            }}>
            <label>Choose a city</label>
          </DropdownCities>
          <ul>
            { this.state.locations.map(location => <li>{location.name}</li>)}
          </ul>
        </main>
  
      </div>
    )
  }
}

export async function getServerSideProps(context) {
    const cities = await getCities()
    const session = await getSession(context)
    return {
      props:{
        cities,
        session
      }
    }
}