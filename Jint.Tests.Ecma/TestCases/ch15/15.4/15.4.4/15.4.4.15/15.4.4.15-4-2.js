/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-4-2.js
 * @description Array.prototype.lastIndexOf returns -1 if 'length' is 0 ( length overridden to null (type conversion))
 */


function testcase() {
  
  var i = Array.prototype.lastIndexOf.call({length: null}, 1);
  
  if (i === -1) {
    return true;
  }
 }
runTestCase(testcase);
