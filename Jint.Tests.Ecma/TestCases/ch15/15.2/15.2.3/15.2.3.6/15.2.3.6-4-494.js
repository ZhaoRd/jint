/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-494.js
 * @description ES5 Attributes - [[Get]] attribute of accessor property ([[Get]] is a Function, [[Set]] is undefined, [[Enumerable]] is true, [[Configurable]] is true) is the expected function
 */


function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: undefined,
            enumerable: true,
            configurable: true
        });

        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return propertyDefineCorrect && desc.get === getFunc && obj.prop === 1001;
    }
runTestCase(testcase);
