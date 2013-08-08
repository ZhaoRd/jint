/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-59.js
 * @description Object.defineProperty - 'name' is accessor descriptor and every fields in 'desc' is absent (8.12.9 step 5)
 */


function testcase() {

        var obj = {};

        function getFunc() {
            return 0;
        }
        function setFunc(value) {
            obj.helpVerifySet = value;
        }

        Object.defineProperty(obj, "foo", {
            get: getFunc,
            set: setFunc
        });

        Object.defineProperty(obj, "foo", {});
        return accessorPropertyAttributesAreCorrect(obj, "foo", getFunc, setFunc, "helpVerifySet", false, false);
    }
runTestCase(testcase);
