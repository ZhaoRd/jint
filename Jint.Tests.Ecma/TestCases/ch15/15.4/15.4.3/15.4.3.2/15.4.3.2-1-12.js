/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.3/15.4.3.2/15.4.3.2-1-12.js
 * @description Array.isArray applied to Error object
 */


function testcase() {

        return !Array.isArray(new SyntaxError());
    }
runTestCase(testcase);
