import {IntegerRequirement} from "./defaultRequirements/IntegerRequirement";
import {StringRequirement} from "./defaultRequirements/StringRequirement";
import {Requirement} from "./defaultRequirements/Requirement";
import {NumberRequirement} from "./defaultRequirements/NumberRequirement";

export const R = {
    integer: (key: string, fallback?: number) => new IntegerRequirement(key, fallback),
    string: (key: string, fallback?: string) => new StringRequirement(key, fallback),
    defined: (key: string, fallback?: any) => new Requirement(key, fallback),
    number: (key: string, fallback?: number) => new NumberRequirement(key, fallback)
}