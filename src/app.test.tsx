import 'react-native';
import * as renderer from 'react-test-renderer';
import { App } from './app';
// tslint:disable-next-line: ordered-imports
import * as React from 'react';

test('renders correctly', () => {
  const tree = renderer.create(
    // tslint:disable-next-line: trailing-comma
    <App />
  );
  expect(tree).toBeDefined();
});
