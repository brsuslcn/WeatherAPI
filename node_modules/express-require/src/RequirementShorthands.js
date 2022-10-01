"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.R = void 0;
var IntegerRequirement_1 = require("./defaultRequirements/IntegerRequirement");
var StringRequirement_1 = require("./defaultRequirements/StringRequirement");
var Requirement_1 = require("./defaultRequirements/Requirement");
var NumberRequirement_1 = require("./defaultRequirements/NumberRequirement");
exports.R = {
    integer: function (key, fallback) { return new IntegerRequirement_1.IntegerRequirement(key, fallback); },
    string: function (key, fallback) { return new StringRequirement_1.StringRequirement(key, fallback); },
    defined: function (key, fallback) { return new Requirement_1.Requirement(key, fallback); },
    number: function (key, fallback) { return new NumberRequirement_1.NumberRequirement(key, fallback); }
};
//# sourceMappingURL=RequirementShorthands.js.map