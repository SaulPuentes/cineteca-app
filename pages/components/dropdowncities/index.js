import { Component } from 'react';

export class DropdownCities extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <div>
          { this.props.children }
          <select onChange={(e) => {
            this.props.changes(e.target.value)
            // console.log('cambie desde dropdowncities/index.js');
          }}>
            { this.props.cities.map((city) =>{
                return <option key={city.Clave} value={city.Clave}>{city.Nombre}</option>
            }) }
          </select>
        </div>
      )
    }
}