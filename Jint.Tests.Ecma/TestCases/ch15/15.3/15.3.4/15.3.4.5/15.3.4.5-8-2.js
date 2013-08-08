/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.4/15.3.4.5/15.3.4.5-8-2.js
 * @description Function.prototype.bind, [[Class]] of bound function must be 'Function'
 */


function testcase() {
  function foo() { }
  var o = {};
  
  var bf = foo.bind(o);
  var s = Object.prototype.toString.call(bf);
  if (s === '[object Function]') {
    return true;
  }
 }
runTestCase(testcase);
