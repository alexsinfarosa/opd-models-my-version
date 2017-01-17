import { observable } from 'mobx'
import Data from '../../public/data.json'

class store {
  @observable data = Data
  @observable selected = {
    pest: '',
    state: '',
    station: '',
    day: new Date(),
    startDate: '',
    endDate: ''
  }
  @observable states = ['Connecticut','Delaware','DC','Illinois','Iowa','Maine','Maryland','Massachusetts','Michigan','Minnesota','Missouri','Nebraska','New Hampshire','New Jersey','New York','North Carolina','Pennsylvania','Rhode Island','South Carolina','South Dakota','Vermont','Virginia','West Virginia','Wisconsin','Alabama','All States']
}

export default new store();
