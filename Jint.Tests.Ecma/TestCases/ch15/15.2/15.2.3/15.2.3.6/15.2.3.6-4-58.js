/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-58.js
 * @description Object.defineProperty - 'name' is data descriptor and every fields in 'desc' is absent (8.12.9 step 5)
 */


function testcase() {

        var obj = {};

        obj.foo = 101; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperty(obj, "foo", {});
        return dataPropertyAttributesAreCorrect(obj, "foo", 101, true, true, true);
    }
runTestCase(testcase);
