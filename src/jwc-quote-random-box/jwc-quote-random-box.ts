/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */

import { LitElement, html, customElement, property, css } from 'lit-element';
import { JwcQuote } from "./jwc-quote.type";

/**
 * User profile element
 */

@customElement('jwc-quote-random-box')
export class JwcQuoteRandomBox extends LitElement {

    static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

    @property()
    icon: string | null = null;

    @property()
    header: string | null = null;

    @property()
    source: JwcQuote[] = [];

    render () {
        return html`
        <div>JESidea jwc-quote-random-box</div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'jwc-quote-random-box': JwcQuoteRandomBox;
    }
}