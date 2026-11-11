/** @license Apache-2.0 */

'use strict';

/**
* Return the first index of an element in a one-dimensional single-precision floating-point ndarray which is less than or equal to a specified search element.
*
* @module @stdlib/blas-ext-base-ndarray-sindex-of-less-than-equal
*
* @example
* var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var sindexOfLessThanEqual = require( '@stdlib/blas-ext-base-ndarray-sindex-of-less-than-equal' );
*
* var x = new Float32Vector( [ 3.0, 4.0, 1.0, 2.0 ] );
*
* var searchElement = scalar2ndarray( 2.0, {
*     'dtype': 'float32'
* });
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = sindexOfLessThanEqual( [ x, searchElement, fromIndex ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
