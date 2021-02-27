/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    number: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
      },
    },
  },
  args: {
    suit: 'swords',
    number: 7,
  },
};

const CardStory = (args) => <Card {...args} />;

export const Primary = CardStory.bind({});
Primary.args = {
  suit: 'swords',
  number: 7,
};
