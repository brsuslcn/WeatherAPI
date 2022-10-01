import {ParameterType, RequirementError} from "../RequirementTypes";

export class Requirement {
    key: string;
    fallback: any;

    constructor(key: string, fallback?: any) {
        this.key = key;
        this.fallback = fallback;
    }

    extractValue(request: Request, type: ParameterType): unknown {
        if (typeof request[type] === 'undefined') {
            throw new RequirementError(`Request ${type} not defined`);
        } else {
            return request[type][this.key];
        }
    }

    insertValue(request: Request, type: ParameterType, newValue: any) {
        if (typeof request[type] === 'undefined') {
            // @ts-ignore
            request[type] = {};
        }

        request[type][this.key] = newValue;
    }

    replaceValue(request: Request, type: ParameterType, newValue: any) {
        if (typeof request[type] === 'undefined') {
            throw new RequirementError(`Request ${type} not defined`);
        } else {
            request[type][this.key] = newValue;
        }
    }

    validate(request: Request, type: ParameterType) {
        if (typeof this.extractValue(request, type) === 'undefined') {
            throw new RequirementError(`Parameter ${this.key} not defined in request ${type}`);
        }
    }
}