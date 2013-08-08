/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.4/15.3.4.5/15.3.4.5-10-1.js
 * @description Function.prototype.bind - internal property [[Class]] of 'F' is set as Function
 */


function testcase() {

        var foo = function () { };

        var obj = foo.bind({});
        return Object.prototype.toString.call(obj) === "[object Function]";
    }
runTestCase(testcase);
