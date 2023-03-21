import ValueStore from './Component/ValueStore';
import { Directive } from './Directive/directives_parser';
import Component from './Component';
export declare function getValueFromElement(element: HTMLElement, valueStore: ValueStore): string | string[] | null | boolean;
export declare function setValueOnElement(element: HTMLElement, value: any): void;
export declare function getAllModelDirectiveFromElements(element: HTMLElement): Directive[];
export declare function getModelDirectiveFromElement(element: HTMLElement, throwOnMissing?: boolean): null | Directive;
export declare function elementBelongsToThisComponent(element: Element, component: Component): boolean;
export declare function cloneHTMLElement(element: HTMLElement): HTMLElement;
export declare function htmlToElement(html: string): HTMLElement;
export declare function cloneElementWithNewTagName(element: Element, newTag: string): HTMLElement;
export declare function getElementAsTagText(element: HTMLElement): string;