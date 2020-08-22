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
let JwcUserProfile = class JwcUserProfile extends LitElement {
    constructor() {
        super(...arguments);
        this.image = null;
        this.data = {
            name: "Javier Escacena",
            username: null,
            occupation: "Programmer",
            location: "Cercedilla",
            company: "@paradigmate",
            email: "javier.escacena@gmail.com",
            website: "http://jesidea.com",
            twitter: "@javiescacena",
            linkedin: "https://www.linkedin.com/in/jescacena/",
            github: "jescacena",
        };
    }
    render() {
        return html ` <div>JESidea user profile ${this.data.name}</div> `;
    }
};
JwcUserProfile.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property()
], JwcUserProfile.prototype, "image", void 0);
__decorate([
    property()
], JwcUserProfile.prototype, "data", void 0);
JwcUserProfile = __decorate([
    customElement("jwc-user-profile")
], JwcUserProfile);
export { JwcUserProfile };
//# sourceMappingURL=jwc-user-profile.js.map