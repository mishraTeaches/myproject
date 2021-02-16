"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observ = rxjs_1.Observable.create(function (data) {
    data.next(Date.now());
});
observ.subscribe(function (data) {
    console.log(data); // 0.24957144215097515 (random number)
});
// subscription 2
observ.subscribe(function (data) {
    console.log(data); // 0.004617340049055896 (random number)
});
