import React from 'react';
import renderer from 'react-test-renderer';
import IndecisionApp from '../components/IndecisionApp';
import Modal from 'react-modal';

jest.spyOn(Modal, "setAppElement").mockImplementation(() => {});

it('<IndecisionApp />', () => {
  const tree = renderer.create(<IndecisionApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
