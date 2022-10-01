import {Requirement} from "./Requirement";
import {ParameterType, RequirementError} from "../RequirementTypes";

export class StringRequirement extends Requirement {
    constructor(key: string, fallback?: string) {
        super(key, fallback);
    }

    validate(request, type: ParameterType) {
        super.validate(request, type);

        if (typeof this.extractValue(request, type) !== 'string') {
            throw new RequirementError(`Parameter ${this.key} in ${type} is expected to be a string`);
        }
    }
}