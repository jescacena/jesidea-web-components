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
import "lit-media-query/lit-media-query.js";
// import { classMap } from "lit-html/directives/class-map";
import { styles, githubIconBase64Encoded, linkedIconBase64Encoded, twitterIconBase64Encoded } from "./jwc-layout-footer.styles";
import { SocialLinkType } from "./jwc-social-link-item";
let JwcLayoutFooter = class JwcLayoutFooter extends LitElement {
    constructor() {
        super(...arguments);
        this._query = "(max-width: 800px)";
        this._isMobile = window.visualViewport.width < 800;
        this._isMenuMobileVisible = false;
        this.socialLinkItems = [
            { type: SocialLinkType.Github, url: "https://github.com/jescacena" },
            { type: SocialLinkType.Linkedin, url: "https://www.linkedin.com/in/jescacena" },
            { type: SocialLinkType.Twitter, url: "https://twitter.com/javiescacena" }
        ];
    }
    _handleMediaQuery(event) {
        this._isMobile = event.detail.value;
    }
    _getIconBySocialNetwork(type) {
        switch (type) {
            case SocialLinkType.Github: return githubIconBase64Encoded;
            case SocialLinkType.Linkedin: return linkedIconBase64Encoded;
            case SocialLinkType.Twitter: return twitterIconBase64Encoded;
            default:
                console.log('Error _getIconBySocialNetwork: no icon for this network type');
                return "";
        }
    }
    _renderItems() {
        return this.socialLinkItems.map((item) => {
            return html `<li>
                <a target="_blank" href=${item.url} class="social-link-item"><img src=${this._getIconBySocialNetwork(item.type)}></a>
            </li>`;
        });
    }
    render() {
        console.log("JES render footer!!!");
        const currentYear = new Date().getFullYear();
        return html `
            <lit-media-query
                .query="${this._query}"
                @changed="${this._handleMediaQuery}"
            >
            </lit-media-query>
            <div class="container">
                <ul class="social-links">${this._renderItems()}</ul>
                <div class="copyright"> © Copyright Javier Escacena ${currentYear}, All Rights Reserved.</div>
            </div>
        `;
    }
};
JwcLayoutFooter.styles = [styles];
__decorate([
    property()
], JwcLayoutFooter.prototype, "_query", void 0);
__decorate([
    property()
], JwcLayoutFooter.prototype, "_isMobile", void 0);
__decorate([
    property()
], JwcLayoutFooter.prototype, "_isMenuMobileVisible", void 0);
__decorate([
    property({
        attribute: 'social-link-items',
        converter: (value, type) => {
            // `value` is a string
            // Convert it to a value of type `type` and return it
            console.log('JES footer type', type);
            if (typeof (value) === 'string') {
                return JSON.parse(value);
            }
        }
    })
], JwcLayoutFooter.prototype, "socialLinkItems", void 0);
JwcLayoutFooter = __decorate([
    customElement("jwc-layout-footer")
], JwcLayoutFooter);
export { JwcLayoutFooter };
//# sourceMappingURL=jwc-layout-footer.js.map