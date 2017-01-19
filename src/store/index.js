import { observable, action } from 'mobx'
import Data from '../../public/data.json'

class store {
  @observable data = Data

  @observable selected = {
    pest: '',
    state: {
      name: '',
      center: [42.9543, -75.5262],
      zoom: 6,
      greatPlaceCoords: {lat: 42.9543, lng: -75.5262}
    },
    station: '',
    day: new Date(),
    startDate: '',
    endDate: ''
  }

  @observable states = ['Connecticut','Delaware','DC','Illinois','Iowa','Maine','Maryland','Massachusetts','Michigan','Minnesota','Missouri','Nebraska','New Hampshire','New Jersey','New York','North Carolina','Pennsylvania','Rhode Island','South Carolina','South Dakota','Vermont','Virginia','West Virginia','Wisconsin','Alabama','All States']

  @observable stateCenters = [
  		{postalCode: 'CT', lat: 41.6220, lon: -72.7272, zoom: 8, name: 'Connecticut'},
  		{postalCode: 'DE', lat: 38.9895, lon: -75.5051, zoom: 8, name: 'Delaware'},
  		{postalCode: 'DC', lat: 38.9101, lon: -77.0147, zoom: 8, name: 'DC'},
  		{postalCode: 'IL', lat: 40.0411, lon: -89.1965, zoom: 6, name: 'Illinois'},
  		{postalCode: 'IA', lat: 42.0753, lon: -93.4959, zoom: 6, name: 'Iowa'},
  		{postalCode: 'ME', lat: 45.3702, lon: -69.2438, zoom: 7, name: 'Maine'}, //no stations
  		{postalCode: 'MD', lat: 39.0550, lon: -76.7909, zoom: 7, name: 'Maryland'},
  		{postalCode: 'MA', lat: 42.2596, lon: -71.8083, zoom: 7, name: 'Massachusetts'},
  		{postalCode: 'MI', lat: 44.3461, lon: -85.4114, zoom: 6, name: 'Michigan'}, //no stations
  		{postalCode: 'MN', lat: 46.2810, lon: -94.3046, zoom: 6, name: 'Minnesota'},
  		{postalCode: 'MO', lat: 38.3568, lon: -92.4571, zoom: 6, name: 'Missouri'},
  		{postalCode: 'NE', lat: 41.5392, lon: -99.7968, zoom: 6, name: 'Nebraska'},
  		{postalCode: 'NH', lat: 43.6805, lon: -71.5818, zoom: 7, name: 'New Hampshire'},
  		{postalCode: 'NJ', lat: 40.1907, lon: -74.6733, zoom: 7, name: 'New Jersey'},
  		{postalCode: 'NY', lat: 42.9543, lon: -75.5262, zoom: 6, name: 'New York'},
  		{postalCode: 'NC', lat: 35.5579, lon: -79.3856, zoom: 6, name: 'North Carolina'},
  		{postalCode: 'PA', lat: 40.8786, lon: -77.7985, zoom: 7, name: 'Pennsylvania'},
  		{postalCode: 'RI', lat: 41.6762, lon: -71.5562, zoom: 9, name: 'Rhode Island'},
  		{postalCode: 'SC', lat: 33.6290, lon: -80.9500, zoom: 6, name: 'South Carolina'},
  		{postalCode: 'SD', lat: 43.9169, lon: -100.2282, zoom: 6, name: 'South Dakota'},
  		{postalCode: 'VT', lat: 44.0688, lon: -72.6663, zoom: 7, name: 'Vermont'},
  		{postalCode: 'VA', lat: 37.5229, lon: -78.8531, zoom: 7, name: 'Virginia'},
  		{postalCode: 'WV', lat: 38.6409, lon: -80.6230, zoom: 7, name: 'West Virginia'},
  		{postalCode: 'WI', lat: 44.6243, lon: -89.9941, zoom: 6, name: 'Wisconsin'},
  		{postalCode: 'AL', lat: 32.6174, lon: -86.6795, zoom: 7, name: 'Alabama'},
  		{postalCode: 'ALL',lat: 42.5000, lon: -75.7000, zoom: 6, name: 'All States'},
  	];

    @observable stations = []

    @observable filteredStations = []

    @action filterStations = (postalCode) => {
      this.filteredStations = this.stations.filter(state => state.state === postalCode)
    }
}

export default new store();
