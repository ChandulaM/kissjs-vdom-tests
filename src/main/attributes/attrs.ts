import { AttrType } from './types';

export interface IAttribute {
    type: AttrType.ATTRIBUTE;
    name: string;
    value: string | boolean | undefined;
}

export function attr(
    name: string,
    value: string | boolean
): IAttribute {
    return {
        type: AttrType.ATTRIBUTE,
        name,
        value
    }
}

export function id(value: string): IAttribute {
    return attr('id', value);
}

export function className(value: string): IAttribute {
    return attr('class', value);
}

export function type(value: string): IAttribute {
    return attr('type', value);
}

export function value(value: string): IAttribute {
    return attr('value', value);
}

export function style(value: string): IAttribute {
    return attr('style', value);
}