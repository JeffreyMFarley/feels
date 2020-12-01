/* eslint-disable no-undefined */

import sut, { initialState } from '../mood'
import { changeSensation } from '../../actions/sensation'

describe( 'mood reducer', () => {
  let expected;
  beforeEach( () => {
    expected = { ...initialState }
  } );

  it( 'handles initial state', () => {
    expect( sut( undefined, {} ) ).toEqual( expected );
  } );

  it( 'changes a known value', () => {
    expected.fear = 1;

    const actual = sut( undefined, changeSensation( 'fear', 1 ) )

    expect( actual ).toEqual( expected );
  } );

  it( 'rejects an unknown value', () => {
    const actual = sut( undefined, changeSensation( 'foo', 1 ) )

    expect( actual ).toEqual( expected );
  } );

  it( 'clamps values that are too high', () => {
    expected.fear = 5;

    const actual = sut( undefined, changeSensation( 'fear', 99 ) )

    expect( actual ).toEqual( expected );
  } );

  it( 'clamps values that are too low', () => {
    expected.energy = 0;

    const actual = sut( undefined, changeSensation( 'energy', -99 ) )

    expect( actual ).toEqual( expected );
  } );
} );
