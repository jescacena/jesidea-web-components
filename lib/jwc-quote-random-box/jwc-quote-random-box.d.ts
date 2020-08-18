/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement } from 'lit-element';
import { JwcQuote } from "./jwc-quote.type";
/**
 * User profile element
 */
export declare class JwcQuoteRandomBox extends LitElement {
    static styles: import("lit-element").CSSResult;
    icon: string | null;
    header: string | null;
    source: JwcQuote[];
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'jwc-quote-random-box': JwcQuoteRandomBox;
    }
}
//# sourceMappingURL=jwc-quote-random-box.d.ts.map