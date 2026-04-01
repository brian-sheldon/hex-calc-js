#!/usr/bin/env node

// Only used during development to workout the alignment
let rulerStr = [
  '         1         2         3         4         5         6         7         8         9         0',
  '....^....0....^....0....^....0....^....0....^....0....^....0....^....0....^....0....^....0....^....0'
];

function dec( v, w = 0, ch = '0' ) {
  return v.toString().padStart( w, ch );
}

function hex( v, w = 0, ch = '0' ) {
  return v.toString( 16 ).padStart( w, ch );
}

function bin( v, w = 0, ch = '0' ) {
  return v.toString( 2 ).padStart( w, ch );
}

function str( s, w = 0 ) {
  return s.padStart( w, ' ' );
}

function header( s, w ) {
  let sep = ' | ';
  return '| ' + str( s[0], w[0] ) + sep + str( s[1], w[1] ) + sep + str( s[2], w[2] ) + ' |';
}
function bar( w, ch = '-' ) {
  let sep = ch + '+' + ch;
  return '+' + ch + ch.repeat( w[0] ) + sep + ch.repeat( w[1] ) + sep + ch.repeat( w[2] ) + ch + '+'
}
function line( v, w ) {
  let ch = ' ';
  let sep = ' | ';
  return '| ' + dec( v, w[0], ch ) + sep + hex( v, w[1], ch ) + sep + bin( v, w[2], ch ) + ' |';
}

function start() {
  let p = process.argv.slice( 2 );
  let plen = p.length;
  if ( plen < 2 ) {
    console.log( 'calc value1 value2 [ + - x / and or xor ] ; default is +' );
  } else {
    let p1h = plen > 0 ? p[0] : '0' ;
    let p2h = plen > 1 ? p[1] : '0' ;
    let p3 = plen > 2 ? p[2] : '+' ;
    p1 = parseInt( p1h, 16 );
    p2 = parseInt( p2h, 16 );
    let res = p1 + p2;
    switch ( p3 ) {
      case '+':
        res = p1 + p2;
        break;
      case '-':
        res = p1 - p2;
        break;
      case 'x':
        res = p1 * p2;
        break;
      case '/':
        res = Math.floor( p1 / p2 );
        break;
      case 'and':
        res = p1 & p2;
        break;
      case 'or':
        res = p1 | p2;
        break;
      case 'xor':
        res = p1 ^ p2;
        break;
    }
    let w = [ 12, 10, 32 ];
    console.log( bar( w ) );
    console.log( header( [ 'decimal', 'hex', 'binary' ], w ) );
    console.log( bar( w ) );
    console.log( line( p1, w ) );
    console.log( line( p2, w ) );
    console.log( bar( w ) );
    console.log( line( res, w ) );
    console.log( bar( w ) );
  }
}

start();




