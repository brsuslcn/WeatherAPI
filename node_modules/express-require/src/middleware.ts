import {validateRequest} from "./RequestRequirements";
import {RequestRequirements} from "./RequirementTypes";

// Middleware to use
export function requirements (requestRequirements: RequestRequirements) {
    return (request, response, next) => {
        try {
            validateRequest(request, requestRequirements);
            next();
        } catch (e) {
            response.status(400).send(e.message);
        }
    }
}