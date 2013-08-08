/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.5/15.3.5.4/15.3.5.4_2-85gs.js
 * @description Strict mode - checking access to strict function caller from non-strict function (non-strict function declaration called by strict Function.prototype.call(null))
 * @noStrict
 */


function f() { return gNonStrict();};
(function () {"use strict"; return f.call(null);})();


function gNonStrict() {
    return gNonStrict.caller;
}

