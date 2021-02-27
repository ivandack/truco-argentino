import React from 'react';
import PropTypes from 'prop-types';
import css from './Hand.module.scss';

import Card, { suits } from '../Card';

const Hand = ({ cards }) => (
  <div className={css.hand}>
    {cards.map(({ suit, number }) => (<Card suit={suit} number={number} />))}
  </div>
);

Hand.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    suit: PropTypes.oneOf(suits).isRequired,
    number: PropTypes.oneOf([...(new Array(10))].map((_, i) => i + 1)).isRequired,
  })),
};

Hand.defaultProps = {
  cards: [],
};

export default Hand;
