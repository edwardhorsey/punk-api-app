import React, { Component } from 'react';
import styles from './CardList.module.scss';
import Card from '../Card';

class CardList extends Component {
  state = {  }

  renderCards = () => this.props.cardData.map((beer, id) =>  <Card key={id} cardData={beer} />)

  render() { 
    return ( 
      <section className={styles.cards}>
        {this.renderCards()}
      </section>
     );
  }
}
 
export default CardList;