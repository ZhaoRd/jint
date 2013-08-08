/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-b-i-14.js
 * @description Array.prototype.indexOf - element to be retrieved is own accessor property that overrides an inherited accessor property on an Array-like object
 */


function testcase() {

        var obj = { length: 1 };

        try {
            Object.defineProperty(Object.prototype, "0", {
                get: function () {
                    return false;
                },
                configurable: true
            });

            Object.defineProperty(obj, "0", {
                get: function () {
                    return true;
                },
                configurable: true
            });

            return 0 === Array.prototype.indexOf.call(obj, true);
        } finally {
            delete Object.prototype[0];
        }
    }
runTestCase(testcase);
