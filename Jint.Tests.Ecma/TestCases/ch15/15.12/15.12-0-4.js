/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * This test should be run without any built-ins being added/augmented.
 * The last paragraph in section 15 says "every other property described
 * in this section has the attribute {... [[Enumerable]] : false ...}
 * unless otherwise specified. This default applies to the properties on
 * JSON, and we should not be able to enumerate them.
 *
 * @path ch15/15.12/15.12-0-4.js
 * @description JSON object's properties must be non enumerable
 */


function testcase() { 
  var o = JSON;
  var i = 0;
  for (var p in o) {
    i++;
  }
    
  if (i === 0) {
    return true;
  }
 }
runTestCase(testcase);
