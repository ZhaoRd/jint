/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-224.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index property, the [[Value]] field of 'desc' and the [[Value]] attribute value of 'name' are two booleans with same value (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];

        Object.defineProperty(arrObj, "0", { value: true });

        Object.defineProperty(arrObj, "0", { value: true });
        return dataPropertyAttributesAreCorrect(arrObj, "0", true, false, false, false);
    }
runTestCase(testcase);
