/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-218.js
 * @description Object.defineProperties - 'O' is an Array, 'name' is an array index property, the [[Value]] field of 'desc' and the [[Value]] attribute value of 'name' are two objects which refer to the same object  (15.4.5.1 step 4.c)
 */


function testcase() {
        var arr = [];

        var obj1 = { length: 10 };
        Object.defineProperty(arr, "0", {
            value: obj1
        });

        var properties = {
            "0": {
                value: obj1
            }
        };
        try {
            Object.defineProperties(arr, properties);
            return dataPropertyAttributesAreCorrect(arr, "0", obj1, false, false, false);
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
