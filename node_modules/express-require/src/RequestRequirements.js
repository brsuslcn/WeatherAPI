"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
var Requirement_1 = require("./defaultRequirements/Requirement");
function validateRequest(request, requirements) {
    for (var _i = 0, _a = Object.entries(requirements); _i < _a.length; _i++) {
        var _b = _a[_i], requestPart = _b[0], requirementListOrRequirement = _b[1];
        // Wrap in list if only single Requirement is given
        var requirementList = requirementListOrRequirement instanceof Requirement_1.Requirement ? [requirementListOrRequirement] : requirementListOrRequirement;
        var parameterType = requestPart;
        for (var _c = 0, requirementList_1 = requirementList; _c < requirementList_1.length; _c++) {
            var requirement = requirementList_1[_c];
            if (typeof requirement.extractValue(request, parameterType) == 'undefined' && typeof requirement.fallback !== 'undefined') {
                requirement.insertValue(request, parameterType, requirement.fallback);
            }
            requirement.validate(request, parameterType);
        }
    }
}
exports.validateRequest = validateRequest;
//# sourceMappingURL=RequestRequirements.js.map