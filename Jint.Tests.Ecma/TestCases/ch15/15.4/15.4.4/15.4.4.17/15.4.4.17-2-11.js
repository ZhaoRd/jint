/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-2-11.js
 * @description Array.prototype.some - 'length' is an own accessor property without a get function on an Array-like object
 */


function testcase() {

        var accessed = false;

        function callbackfn(val, idx, obj) {
            accessed = true;
            return val > 10;
        }

        var obj = {
            0: 11,
            1: 12
        };
        Object.defineProperty(obj, "length", {
            set: function () { },
            configurable: true
        });

        return !Array.prototype.some.call(obj, callbackfn) && !accessed;
    }
runTestCase(testcase);
