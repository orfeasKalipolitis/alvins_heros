import React from 'react';
import ReactDOM from 'react-dom';
import HeroCreator from './HeroCreator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroCreator />, div);
  ReactDOM.unmountComponentAtNode(div);
});