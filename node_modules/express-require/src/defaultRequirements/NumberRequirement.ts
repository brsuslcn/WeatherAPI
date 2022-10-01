import {Requirement} from "./Requirement";
import {ParameterType, RequirementError} from "../RequirementTypes";

export class NumberRequirement extends Requirement {
    constructor(key: string, fallback?: number) {
        super(key, fallback);
    }

    validate(request, type: ParameterType) {
        super.validate(request, type);
        const value = this.extractValue(request, type);
        if (typeof value !== 'number') {
            const asNumber = Number(value);

            if (isNaN(asNumber)) {
                throw new RequirementError(`Parameter ${this.key} in ${type} is expected to be a number`);
            } else {
                this.replaceValue(request, type, asNumber);
            }
        }
    }
}