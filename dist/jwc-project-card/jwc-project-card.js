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
import { LitElement, customElement, property, html } from "lit-element";
import 'lit-media-query/lit-media-query.js';
import { classMap } from 'lit-html/directives/class-map';
import { styles, fallbackImageBase64Encoded } from './jwc-project-card.styles';
/**
 * Project card
 */
let JwcProjectCard = class JwcProjectCard extends LitElement {
    constructor() {
        super(...arguments);
        this._query = '(max-width: 800px)';
        this._isMobile = window.visualViewport.width < 800;
        this.image = fallbackImageBase64Encoded;
        this.containerClasses = { container: true, mobile: false };
        this.headerClasses = { header: true, 'header-mobile': false };
        this.data = {
            name: "-Empty name-",
            description: "-Empty description-",
            website: "-Empty website url-",
            repo: null,
            download: null
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // console.log('connected')
    }
    _handleMediaQuery(event) {
        this._isMobile = event.detail.value;
        this.containerClasses = { container: true, mobile: this._isMobile.valueOf() };
        this.headerClasses = { header: true, 'header-mobile': this._isMobile.valueOf() };
        // console.log('JES _handleMediaQuery', this._isMobile, this.containerClasses);
    }
    render() {
        this.containerClasses = { container: true, mobile: this._isMobile.valueOf() };
        this.headerClasses = { header: true, 'header-mobile': this._isMobile.valueOf() };
        // console.log('JES render!!',this.containerClasses);
        // console.log('JES jwc-project-card data prop-->', this.data);
        var downloadIcon = (this.data.download) ? html `
      <li class="download">
        <a href="${this.data.download}" target="_blank"></a>
      </li>
      ` : '';
        var repoIcon = (this.data.repo) ? html `
      <li class="repository">
        <a href="${this.data.repo}" target="_blank"></a>
      </li>
      ` : '';
        return html `
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}">
      </lit-media-query>
      <div class=${classMap(this.containerClasses)}>
        <div class=${classMap(this.headerClasses)}>
          <h2>${this.data.name}</h2>
          <img src="${this.image}">
        </div>
        <div class="right-list">
          <p>${this.data.description}</p>
          <ul>
            <li class="website">
              <a href="${this.data.website}" target="_blank"></a>
            </li>
            ${downloadIcon}
            ${repoIcon}
          </ul>
        </div>
      </div>
    `;
    }
};
JwcProjectCard.styles = [styles];
__decorate([
    property()
], JwcProjectCard.prototype, "_query", void 0);
__decorate([
    property()
], JwcProjectCard.prototype, "_isMobile", void 0);
__decorate([
    property()
], JwcProjectCard.prototype, "image", void 0);
__decorate([
    property()
], JwcProjectCard.prototype, "containerClasses", void 0);
__decorate([
    property()
], JwcProjectCard.prototype, "headerClasses", void 0);
__decorate([
    property()
], JwcProjectCard.prototype, "data", void 0);
JwcProjectCard = __decorate([
    customElement("jwc-project-card")
], JwcProjectCard);
export { JwcProjectCard };
//# sourceMappingURL=jwc-project-card.js.map