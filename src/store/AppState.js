import { observable, action } from 'mobx';
// import axios from 'axios';

class AppState {
  @observable state;
  @observable pest;
  @observable station;

  constructor() {
    this.state = '';
    this.pest = '';
    this.station = '';
  }

  @action setState(state) {
    this.state = state
  }

}

export default AppState;
