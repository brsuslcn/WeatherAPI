import {ParameterType, RequestRequirements} from "./RequirementTypes";
import {Requirement} from "./defaultRequirements/Requirement";

export function validateRequest(request, requirements: RequestRequirements) {
    for (const [requestPart, requirementListOrRequirement] of Object.entries(requirements)) {
        // Wrap in list if only single Requirement is given
        const requirementList = requirementListOrRequirement instanceof Requirement ? [requirementListOrRequirement] : requirementListOrRequirement;

        const parameterType = requestPart as ParameterType;

        for (const requirement of requirementList) {
            if (typeof requirement.extractValue(request, parameterType) == 'undefined' && typeof requirement.fallback !== 'undefined') {
                requirement.insertValue(request, parameterType, requirement.fallback);
            }

            requirement.validate(request, parameterType);
        }
    }
}