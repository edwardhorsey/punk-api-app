import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import FiltersList from '../FiltersList';
import brewdogLogo from '../../assets/logo.png';

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className={styles.navBar}>
        <div className={styles.logoHeader}>
          <img src={brewdogLogo} alt={'Brewdog Logo'} />
          <p>Search the Brewdog Punk API</p>
        </div>
        <div className={styles.searchFilters}>
          <input className={styles.search} type="text" placeholder="Search" onInput={(event) => this.props.search(event.target.value)}/>
          <FiltersList filters={this.props.filters} />
        </div>
      </nav>
     );
  }
}
 
export default NavBar;