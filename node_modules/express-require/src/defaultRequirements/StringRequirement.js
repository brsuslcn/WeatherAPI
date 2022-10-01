"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringRequirement = void 0;
var Requirement_1 = require("./Requirement");
var RequirementTypes_1 = require("../RequirementTypes");
var StringRequirement = /** @class */ (function (_super) {
    __extends(StringRequirement, _super);
    function StringRequirement(key, fallback) {
        return _super.call(this, key, fallback) || this;
    }
    StringRequirement.prototype.validate = function (request, type) {
        _super.prototype.validate.call(this, request, type);
        if (typeof this.extractValue(request, type) !== 'string') {
            throw new RequirementTypes_1.RequirementError("Parameter ".concat(this.key, " in ").concat(type, " is expected to be a string"));
        }
    };
    return StringRequirement;
}(Requirement_1.Requirement));
exports.StringRequirement = StringRequirement;
//# sourceMappingURL=StringRequirement.js.map