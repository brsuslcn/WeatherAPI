import {Requirement} from "./defaultRequirements/Requirement";

export type RequestRequirements = {
    [key in ParameterType]?: Requirement[] | Requirement;
};

export type ParameterType = 'body' | 'query' | 'headers' | 'cookies' | 'session';

export class RequirementError extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'RequirementError';
        Object.setPrototypeOf(this, RequirementError.prototype);
    }
}