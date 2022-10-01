import {Requirement} from "./Requirement";
import {ParameterType, RequirementError} from "../RequirementTypes";

export class IntegerRequirement extends Requirement {
    constructor(key: string, fallback?: number) {
        super(key, fallback);
    }

    validate(request, type: ParameterType) {
        super.validate(request, type);
        let value = this.extractValue(request, type);
        if (typeof value !== 'number') {
            const asNumber: number = Number(value);

            if (isNaN(asNumber)) {
                throw new RequirementError(`Parameter ${this.key} in ${type} is expected to be an Integer`);
            } else {
                value = asNumber;
                this.replaceValue(request, type, asNumber);
            }
        }

        if (Math.floor(<number>value) !== value) {
            throw new RequirementError(`Parameter ${this.key} in ${type} is expected to be an Integer`);
        }
    }
}