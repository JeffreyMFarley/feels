import App from '../App';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import React from 'react';
import renderer from 'react-test-renderer';

it( 'renders correctly', () => {
  const mockStore = configureMockStore( [] )
  const store = mockStore( {
    mood: { foo: 1, bar: 2 }
  } )

  const tree = renderer
    .create( <Provider store={store}><App /></Provider> )
    .toJSON();
  expect( tree ).toMatchSnapshot();
} );
