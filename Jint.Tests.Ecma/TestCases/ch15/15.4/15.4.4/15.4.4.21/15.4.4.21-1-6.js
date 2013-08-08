/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-1-6.js
 * @description Array.prototype.reduce applied to Number object
 */


function testcase() {
        function callbackfn(prevVal, curVal, idx, obj) {
            return obj instanceof Number;
        }

        var obj = new Number(-128);
        obj.length = 2;
        obj[0] = 11;
        obj[1] = 12;
        return Array.prototype.reduce.call(obj, callbackfn, 1);
    }
runTestCase(testcase);
