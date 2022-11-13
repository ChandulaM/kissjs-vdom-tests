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

// export function accept(value: string): IAttribute {
//     return attr('accept', value);
// }

// export function action(value: string): IAttribute {
//     return attr('action', value);
// }

// export function alt(value: string): IAttribute {
//     return attr('alt', value);
// }

// export function checked(value: boolean): IAttribute {
//     return attr('checked', value);
// }

// export function cols(value: string): IAttribute {
//     return attr('cols', value);
// }

// export function colspan(value: string): IAttribute {
//     return attr('colspan', value);
// }

// export function datetime(value: string): IAttribute {
//     return attr('datetime', value);
// }

// export function dir(value: string): IAttribute {
//     return attr('dir', value);
// }

// export function formTarget(value: string): IAttribute {
//     return attr('form', value);
// }

// export function formaction(value: string): IAttribute {
//     return attr('formaction', value);
// }

// export function height(value: string): IAttribute {
//     return attr('height', value);
// }

// export function hidden(value: string): IAttribute {
//     return attr('hidden', value);
// }

// export function href(value: string): IAttribute {
//     return attr('href', value);
// }

// export function max(value: string): IAttribute {
//     return attr('max', value);
// }

// export function maxlength(value: string): IAttribute {
//     return attr('maxlength', value);
// }

// export function media(value: string): IAttribute {
//     return attr('media', value);
// }

// export function method(value: string): IAttribute {
//     return attr('method', value);
// }

// export function min(value: string): IAttribute {
//     return attr('min', value);
// }

// export function multiple(value: string): IAttribute {
//     return attr('multiple', value);
// }

// export function muted(value: string): IAttribute {
//     return attr('muted', value);
// }

// export function onblur(value: string): IAttribute {
//     return attr('onblur', value);
// }

// export function onchange(value: string): IAttribute {
//     return attr('onchange', value);
// }

export function onclick(value: string): IAttribute {
    return attr('onclick', value);
}

// export function onfocus(value: string): IAttribute {
//     return attr('onfocus', value);
// }

export function cssstyle(value: string): IAttribute {
    return attr('style', value);
}

export function value(value: string): IAttribute {
    return attr('value', value);
}