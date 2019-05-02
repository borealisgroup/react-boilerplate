import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReactComponent as Remove } from './remove.svg';

const icons = storiesOf('icons', module);

icons.add('remove', () => <Remove />);
