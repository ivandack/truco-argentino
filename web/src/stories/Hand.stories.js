/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Hand from '../components/Hand';

export default {
  title: 'Hand',
  component: Hand,
};

const HandStory = (args) => <Hand {...args} />;

export const Default = HandStory.bind({});
Default.args = {
  cards: [
    {
      suit: 'batons',
      number: 1,
    },
    {
      suit: 'swords',
      number: 1,
    },
    {
      suit: 'cups',
      number: 3,
    },
  ],
};
