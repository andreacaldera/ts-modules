"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
exports.testFromSharedModule = () => {
    console.log('Using ramda', ramda_1.isEmpty([]));
    return {
        fieldOne: 'field one',
        fieldTwo: 2
    };
};
