/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-267.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, name is accessor property and 'desc' is accessor descriptor, test updating the [[Get]] attribute value of 'name' from undefined to function object (15.4.5.1 step 4.c)
 */


function testcase() {

        var arrObj = [];

        function getFunc() {
            return 12;
        }
        Object.defineProperty(arrObj, "0", {
            get: undefined,
            configurable: true
        });

        Object.defineProperty(arrObj, "0", {
            get: getFunc
        });
        return accessorPropertyAttributesAreCorrect(arrObj, "0", getFunc, undefined, undefined, false, true);
    }
runTestCase(testcase);
