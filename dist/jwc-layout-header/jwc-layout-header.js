var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement, customElement, property, html } from "lit-element";
import "lit-media-query/lit-media-query.js";
import { classMap } from "lit-html/directives/class-map";
import { styles, fallbackImageBase64Encoded, hamburgerIconBase64Encoded, } from "./jwc-layout-header.styles";
let JwcLayoutHeader = class JwcLayoutHeader extends LitElement {
    constructor() {
        super(...arguments);
        this._query = "(max-width: 800px)";
        this._isMobile = window.visualViewport.width < 800;
        this._isMenuMobileVisible = false;
        this.logo = fallbackImageBase64Encoded;
        this.menuItems = [
            { label: "Home", url: "/home" },
            { label: "About", url: "/home/about" },
            { label: "Articles", url: "/home/articles" },
        ];
    }
    _handleMediaQuery(event) {
        this._isMobile = event.detail.value;
    }
    _handleClick() {
        this._toggleMenuMobile();
    }
    _toggleMenuMobile() {
        this._isMenuMobileVisible = !this._isMenuMobileVisible;
    }
    renderMenuItems() {
        return this.menuItems.map((item) => {
            return html `<li>${item.label} &gt;</li>`;
        });
    }
    renderMenu() {
        return html `
      ${this._isMobile
            ? html `<a
            href="#"
            class="menu-mobile-icon"
            @click="${this._handleClick}"
            ><img src=${hamburgerIconBase64Encoded}
          /></a>`
            : html `<ul class="menu-desktop">
            ${this.renderMenuItems()}
          </ul>`}
    `;
    }
    renderMenuMobile() {
        const menuMobileClasses = {
            "menu-mobile": true,
            visible: this._isMenuMobileVisible.valueOf(),
        };
        return html `
      ${this._isMobile
            ? html ` <div class=${classMap(menuMobileClasses)}>
            <div class="close" @click="${this._toggleMenuMobile}">X</div>
            <ul>
              ${this.renderMenuItems()}
            </ul>
          </div>`
            : html ``}
    `;
    }
    render() {
        console.log("JES render header 222!!!", this.menuItems);
        const menu = this.renderMenu();
        return html `
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>
      <div class="container">
        <img src=${this.logo} />
        ${menu}
      </div>
      ${this.renderMenuMobile()}
    `;
    }
};
JwcLayoutHeader.styles = [styles];
__decorate([
    property()
], JwcLayoutHeader.prototype, "_query", void 0);
__decorate([
    property()
], JwcLayoutHeader.prototype, "_isMobile", void 0);
__decorate([
    property()
], JwcLayoutHeader.prototype, "_isMenuMobileVisible", void 0);
__decorate([
    property()
], JwcLayoutHeader.prototype, "logo", void 0);
__decorate([
    property({
        attribute: 'menu-items',
        converter: (value, type) => {
            console.log('JES type', type);
            if (typeof (value) === 'string') {
                return JSON.parse(value);
            }
        }
    })
], JwcLayoutHeader.prototype, "menuItems", void 0);
JwcLayoutHeader = __decorate([
    customElement("jwc-layout-header")
], JwcLayoutHeader);
export { JwcLayoutHeader };
//# sourceMappingURL=jwc-layout-header.js.map