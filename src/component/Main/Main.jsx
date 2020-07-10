import React, { Component } from 'react';
import styles from './Main.module.scss';
import CardList from '../CardList';

class Main extends Component {
  render() { 
    return ( 
      <section className={styles.main}>
        <CardList cardData={this.props.cardData} />
      </section>

     );
  }
}
 
export default Main;