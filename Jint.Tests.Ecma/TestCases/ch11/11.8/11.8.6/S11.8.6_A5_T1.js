// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * TypeError is subclass of Error from instanceof operator point of view
 *
 * @path ch11/11.8/11.8.6/S11.8.6_A5_T1.js
 * @description Checking Error case
 */

var __err = new Error;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__err instanceof Error)) {
	$ERROR('#1: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__err instanceof TypeError) {
	$ERROR('#2: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

var err__ = Error('failed');

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!(err__ instanceof Error)) {
	$ERROR('#3: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (err__ instanceof TypeError) {
	$ERROR('#4: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////


