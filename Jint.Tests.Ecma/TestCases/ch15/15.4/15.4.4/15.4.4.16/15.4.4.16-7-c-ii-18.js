/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-7-c-ii-18.js
 * @description Array.prototype.every - 'this' of 'callbackfn' is an String object when T is not an object (T is a string primitive)
 */


function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return 'hello' === this.valueOf();
        }

        var obj = { 0: 11, length: 2 };

        return Array.prototype.every.call(obj, callbackfn, "hello") && accessed;
    }
runTestCase(testcase);
