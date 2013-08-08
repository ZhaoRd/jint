/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-202.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'name' property doesn't exist in 'O' and [[Enumerable]] is absent in data descriptor 'desc', test [[Enumerable]] of property 'name' is set to false (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [];

        Object.defineProperty(arrObj, "0", {
            value: 1001,
            writable: true,
            configurable: true
        });
        return dataPropertyAttributesAreCorrect(arrObj, "0", 1001, true, false, true);
    }
runTestCase(testcase);
