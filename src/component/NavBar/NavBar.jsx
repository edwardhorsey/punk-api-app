import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import FiltersList from '../FiltersList';
import brewdogLogo from '../../assets/logo.png';
import burger from '../../assets/hamburger-menu.png';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.searchRef = React.createRef()
  }
  state = { 
    showing: false,
   }

  toggleFilters = () => {
    this.setState({showing: !this.state.showing}) 
  }

  render() { 
    return ( 
      <nav className={styles.navBar}>
        <div className={styles.logoHeader}>
          <img src={brewdogLogo} alt={'Brewdog Logo'} />
          <p>Search the Brewdog Punk API</p>
        </div>
        <div ref={this.searchRef} className={this.state.showing? styles.searchFilters: styles.hideFilters}>
          <input className={styles.search} type="text" placeholder="Search" onInput={(event) => this.props.search(event.target.value)}/>
          <FiltersList filters={this.props.filters} />
        </div>
        <div className={styles.burger}>
          <img onClick={this.toggleFilters} src={burger} alt="burger" />
        </div>
      </nav>
     );
  }
}
 
export default NavBar;