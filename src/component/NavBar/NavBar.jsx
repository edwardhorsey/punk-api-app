import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import FiltersList from '../FiltersList';


class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className={styles.navBar}>
        <input className={styles.search} type="text" placeholder="Search" onInput={(event) => this.props.search(event.target.value)}/>
        <FiltersList filters={this.props.filters} />
      </nav>
     );
  }
}
 
export default NavBar;