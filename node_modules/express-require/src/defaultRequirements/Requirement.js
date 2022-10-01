"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requirement = void 0;
var RequirementTypes_1 = require("../RequirementTypes");
var Requirement = /** @class */ (function () {
    function Requirement(key, fallback) {
        this.key = key;
        this.fallback = fallback;
    }
    Requirement.prototype.extractValue = function (request, type) {
        if (typeof request[type] === 'undefined') {
            throw new RequirementTypes_1.RequirementError("Request ".concat(type, " not defined"));
        }
        else {
            return request[type][this.key];
        }
    };
    Requirement.prototype.insertValue = function (request, type, newValue) {
        if (typeof request[type] === 'undefined') {
            // @ts-ignore
            request[type] = {};
        }
        request[type][this.key] = newValue;
    };
    Requirement.prototype.replaceValue = function (request, type, newValue) {
        if (typeof request[type] === 'undefined') {
            throw new RequirementTypes_1.RequirementError("Request ".concat(type, " not defined"));
        }
        else {
            request[type][this.key] = newValue;
        }
    };
    Requirement.prototype.validate = function (request, type) {
        if (typeof this.extractValue(request, type) === 'undefined') {
            throw new RequirementTypes_1.RequirementError("Parameter ".concat(this.key, " not defined in request ").concat(type));
        }
    };
    return Requirement;
}());
exports.Requirement = Requirement;
//# sourceMappingURL=Requirement.js.map