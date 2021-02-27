import React from 'react';
import renderer from 'react-test-renderer';
import DecisionList from '../components/DecisionList';
import decisions from './fixtures/decisions';

it('<DecisionList /> without data', () => {
  const tree = renderer.create(<DecisionList decisions={[]} removeDecision={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('<DecisionList /> with data', () => {
  const tree = renderer.create(<DecisionList decisions={decisions} removeDecision={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
