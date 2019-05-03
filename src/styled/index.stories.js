import React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledButton } from './styled';

const icons = storiesOf('styled', module);

icons.add('StyledButton', () => <StyledButton>Test</StyledButton>);
