import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import StyleWrapper from 'theme/StyleWrapper';
import { TextInput, RoundCheckbox } from 'components';

addDecorator(story => <StyleWrapper>{story()}</StyleWrapper>);

const atoms = storiesOf('atoms', module);

atoms.add('TextInput', () => <TextInput />);
atoms.add('RoundCheckbox', () => <RoundCheckbox />);
