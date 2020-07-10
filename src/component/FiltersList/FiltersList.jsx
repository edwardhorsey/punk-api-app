import React, { Component } from 'react';
import styles from './FiltersList.module.scss';
import Filter from '../Filter';


class FiltersList extends Component {
  state = {  }

  renderFilters = array => array.map(({ name, fn }, index) => <Filter label={name} logic={fn} key={index}/>)

  render() {
    return <ul>{this.renderFilters(this.props.filters)}</ul>;
  }
}
 
export default FiltersList;