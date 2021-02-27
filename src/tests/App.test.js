import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App';
import Modal from 'react-modal';

jest.spyOn(Modal, "setAppElement").mockImplementation(() => {});

it('<App />', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
