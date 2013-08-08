/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-200.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is an array index named property, 'desc' is data descriptor, test updating all attribute values of 'P'  (15.4.5.1 step 4.c)
 */


function testcase() {
        var arr = [1]; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperties(arr, {
            "0": {
                value: 1001,
                writable: false,
                enumerable: false,
                configurable: false
            }
        });

        return dataPropertyAttributesAreCorrect(arr, "0", 1001, false, false, false);
    }
runTestCase(testcase);
