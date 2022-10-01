"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requirements = void 0;
var RequestRequirements_1 = require("./RequestRequirements");
// Middleware to use
function requirements(requestRequirements) {
    return function (request, response, next) {
        try {
            (0, RequestRequirements_1.validateRequest)(request, requestRequirements);
            next();
        }
        catch (e) {
            response.status(400).send(e.message);
        }
    };
}
exports.requirements = requirements;
//# sourceMappingURL=middleware.js.map