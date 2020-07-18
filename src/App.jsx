import React, { Component } from 'react';
import styles from './App.module.scss';

import { filtersAPI } from './data/filters.js';

import NavBar from './component/NavBar';
import Main from './component/Main';

export default class App extends Component {
  
  state = {
    beers: []
  }
  
    componentDidMount() {
      this.fetchDataFromBD();
    }
  
  handleChange = value => this.fetchDataFromBD(value);

  get filters() {
    return filtersAPI.map(obj => {
      obj['fn'] =  (() => {
        this.setState({ [obj.state]: !this.state[obj.state]})
        setTimeout(this.fetchDataFromBD, 80)
      });
      return obj
    });
  }

  fetchDataFromBD = (value) => {
    let filters = filtersAPI.map(filter => this.state[filter.state] ? filter.filterUrl : '').join('');
    let base = 'https://api.punkapi.com/v2/beers?' + filters;
    let url = !value ? base : base + '&beer_name=' + value;
    console.log(url)
    fetch(url)
      .then(data => data.json())
      .then(json => {console.log(json); this.setState({ beers: json, hello: 'ed' }); console.log('after download json data')})
      .catch(error => console.log(error))
  }

  dataToDisplay = () => this.state.beers ?  <Main cardData={this.state.beers} /> : <p>Loading</p>;
  
  render() {

    const mainDisplay = this.dataToDisplay()

    return (
      <main className={styles.body}>
        <NavBar filters={this.filters} search={this.handleChange}/>
        {mainDisplay}
      </main>
    )
  }
}