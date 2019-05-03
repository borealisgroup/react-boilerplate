import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  TextInput,
  RoundCheckbox,
  Header,
  TodoListItem,
  TodoList,
  TodoForm,
  TodoTemplate,
  TodoPage,
} from 'components';

const atoms = storiesOf('atoms', module);

atoms.add('TextInput', () => <TextInput />);
atoms.add('RoundCheckbox', () => <RoundCheckbox />);

const molecules = storiesOf('molecules', module);

molecules.add('Header', () => <Header />);
molecules.add('TodoForm', () => <TodoForm />);
molecules.add('TodoListItem', () => <TodoListItem />);

const organisms = storiesOf('organisms', module);
organisms.add('TodoList', () => <TodoList />);

const templates = storiesOf('templates', module);
templates.add('TodoTemplate', () => <TodoTemplate />);

const pages = storiesOf('pages', module);
pages.add('TodoPage', () => <TodoPage />);
