import React, { Component } from 'react';
import styles from './Card.module.scss';

class Card extends Component {
  state = {  }

  render() { 
    const {
      name,
      description,
      image_url,
      abv,
      ph,
      first_brewed,
      ibu
       } = this.props.cardData
    
    return ( 
      <article className={styles.card}>
        <img src={image_url} alt="batch of beer"/>
        <div>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p>First Brewed: {first_brewed}</p>
          <p>ABV: {abv}</p>
          <p>pH: {ph}</p>
          <p>IBU: {ibu}</p>
        </div>
      </article>
     );
  }
}
 
export default Card;
