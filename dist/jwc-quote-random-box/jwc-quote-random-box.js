/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from "lit-element";
/**
 * User profile element
 */
let JwcQuoteRandomBox = class JwcQuoteRandomBox extends LitElement {
    constructor() {
        super(...arguments);
        this.icon = null;
        this.header = null;
        this.source = [];
    }
    render() {
        return html ` <div>JESidea jwc-quote-random-box</div> `;
    }
};
JwcQuoteRandomBox.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property()
], JwcQuoteRandomBox.prototype, "icon", void 0);
__decorate([
    property()
], JwcQuoteRandomBox.prototype, "header", void 0);
__decorate([
    property()
], JwcQuoteRandomBox.prototype, "source", void 0);
JwcQuoteRandomBox = __decorate([
    customElement("jwc-quote-random-box")
], JwcQuoteRandomBox);
export { JwcQuoteRandomBox };
//# sourceMappingURL=jwc-quote-random-box.js.map