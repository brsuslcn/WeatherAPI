import {IntegerRequirement} from "./defaultRequirements/IntegerRequirement";
import {StringRequirement} from "./defaultRequirements/StringRequirement";
import {Requirement} from "./defaultRequirements/Requirement";
import {NumberRequirement} from "./defaultRequirements/NumberRequirement";

export const R: {
    integer: (key: string, fallback?: number) => IntegerRequirement,
    string: (key: string, fallback?: string) => StringRequirement,
    defined: (key: string, fallback?: any) => Requirement,
    number: (key: string, fallback?: number) => NumberRequirement
}