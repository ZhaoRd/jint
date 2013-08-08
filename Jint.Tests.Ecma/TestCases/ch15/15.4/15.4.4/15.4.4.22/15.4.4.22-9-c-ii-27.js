/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-c-ii-27.js
 * @description Array.prototype.reduceRight - String Object can be used as accumulator
 */


function testcase() {

        var accessed = false;
        var objString = new String();
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === objString;
        }

        var obj = { 0: 11, length: 1 };

        return Array.prototype.reduceRight.call(obj, callbackfn, objString) === true && accessed;
    }
runTestCase(testcase);
