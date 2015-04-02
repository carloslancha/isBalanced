/*globals describe, it, isBalanced, expect*/

describe( 'isBalanced', function () {
  'use strict';
  it( 'returns true if string with pharentesis is balanced', function () {
    var string = 'test1(test2)test3';

    var result = isBalanced( string );

    expect( result ).toBeTruthy();
  } );

  it( 'returns true if string with bracket is balanced', function () {
    var string = 'test1{test2}test3';

    var result = isBalanced( string );

    expect( result ).toBeTruthy();
  } );

  it( 'returns true if string with braces is balanced', function () {
    var string = 'test1[test2]test3';

    var result = isBalanced( string );

    expect( result ).toBeTruthy();
  } );

  it( 'returns true if string with mixing delimiters is balanced', function () {
    var string = 'test1{test2(test3[test4])}test5';

    var result = isBalanced( string );

    expect( result ).toBeTruthy();
  } );

  it( 'returns true if string with mixing delimiters is balanced', function () {
    var string = 'test1{test2(test3)[test4]}test5';

    var result = isBalanced( string );

    expect( result ).toBeTruthy();
  } );

  it( 'return false if string is not balanced', function () {
    var string = 'test1(test2';

    var result = isBalanced( string );

    expect( result ).toBeFalsy();
  } );

  it( 'return false if string is not balanced', function () {
    var string = 'test1({test2}';

    var result = isBalanced( string );

    expect( result ).toBeFalsy();
  } );

  it( 'return false if string is not balanced', function () {
    var string = 'test1[(]{test2})';

    var result = isBalanced( string );

    expect( result ).toBeFalsy();
  } );
} );