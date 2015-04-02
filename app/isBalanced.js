/*exported isBalanced */

function isBalanced( string ) {
  'use strict';

  var delimiters = '[]{}()',
    store = [];


  function getDelimiterPosition( character ) {
    return delimiters.indexOf( character );
  }

  function isOpeningDelimiter( position ) {
    return position % 2 === 0;
  }

  function isExpectedClosingDelimiter( character ) {
    return store.pop() !== character;
  }

  for ( var i = 0, l = string.length; i < l; i++ ) {
    var character = string[ i ],
      position = getDelimiterPosition( character );

    if ( position === -1 ) {
      continue;
    }

    if ( isOpeningDelimiter( position ) ) {
      store.push( delimiters[ position + 1 ] );
    } else if ( isExpectedClosingDelimiter( character ) ) {
      return false;
    }
  }

  return store.length === 0;
}