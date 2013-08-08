/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-333-4.js
 * @description Indexed property 'P' with attributes [[Writable]]: true, [[Enumerable]]:true, [[Configurable]]:false is writable using simple assignment, 'A' is an Array Object
 */


function testcase() {
        var obj = [];

        Object.defineProperty(obj, "0", {
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        });
        var verifyValue = (obj[0] === 2010);
        obj[0] = 1001;

        return verifyValue && obj[0] === 1001;
    }
runTestCase(testcase);
