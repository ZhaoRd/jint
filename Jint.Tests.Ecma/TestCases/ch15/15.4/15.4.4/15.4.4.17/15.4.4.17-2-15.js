/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-2-15.js
 * @description Array.prototype.some - 'length' is property of the global object
 */


function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        try {
            var oldLen = fnGlobalObject().length;
            fnGlobalObject()[0] = 9;
            fnGlobalObject()[1] = 11;
            fnGlobalObject()[2] = 12;
            fnGlobalObject().length = 2;
            return Array.prototype.some.call(fnGlobalObject(), callbackfn1) &&
                !Array.prototype.some.call(fnGlobalObject(), callbackfn2);
        } finally {
            delete fnGlobalObject()[0];
            delete fnGlobalObject()[1];
            delete fnGlobalObject()[2];
            fnGlobalObject().length = oldLen;
        }
    }
runTestCase(testcase);
