import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import cardsImage from '../assets/cards_01.jpg';

export const suits = ['coins', 'cups', 'swords', 'batons'];

const CardImage = styled.div`
  height: 225px;
  width: 150px;
  border-radius: 15px;
  background: url(${cardsImage}) -${(props) => props.col}px -${(props) => props.row}px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

function getPos(suit, number) {
  if (number < 0 || number > 12) {
    throw new Error('"Number" must be between 1-12');
  }
  const suitPos = suits.indexOf(suit);
  if (suitPos < 0) {
    throw new Error(`Invalid suit "${suit}"`);
  }
  const cardIndex = suitPos * 12 + number - 1;
  const col = Math.floor(cardIndex / 5);
  const row = cardIndex % 5;
  return [col, row];
}

const Card = ({ suit, number }) => {
  const [col, row] = getPos(suit, number);
  return <CardImage col={col * 150} row={row * 225} />;
};

Card.propTypes = {
  suit: PropTypes.oneOf(suits).isRequired,
  number: PropTypes.oneOf([...(new Array(10))].map((_, i) => i + 1)).isRequired,
};

export default Card;
