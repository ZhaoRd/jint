/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-8-b-iii-1-11.js
 * @description Array.prototype.reduce - element to be retrieved is own accessor property that overrides an inherited data property on an Array-like object
 */


function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === "9");
            }
        }

        var proto = { 0: 0, 1: 1, 2: 2 };

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        child.length = 3;

        Object.defineProperty(child, "0", {
            get: function () {
                return "9";
            },
            configurable: true
        });

        Array.prototype.reduce.call(child, callbackfn);
        return testResult;
    }
runTestCase(testcase);
