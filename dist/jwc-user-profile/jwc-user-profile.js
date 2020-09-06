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
import { LitElement, html, customElement, property } from "lit-element";
import "lit-media-query/lit-media-query.js";
import { styles, githubIconBase64Encoded, linkedIconBase64Encoded, twitterIconBase64Encoded, } from "./jwc-user-profile.styles";
/**
 * User profile element
 */
let JwcUserProfile = class JwcUserProfile extends LitElement {
    constructor() {
        super(...arguments);
        this._query = "(max-width: 800px)";
        this._isMobile = window.visualViewport.width < 800;
        this._isMenuMobileVisible = false;
        this.image = "http://jesidea.com/home/img/supermoco-julio-2020.png";
        this.data = {
            name: "Javier Escacena",
            username: null,
            occupation: "Programmer",
            location: "Cercedilla, Madrid, Spain",
            company: "@paradigmate",
            companyUrl: "https://twitter.com/paradigmate?lang=en",
            email: "javier.escacena@gmail.com",
            website: "http://jesidea.com",
            twitter: "@javiescacena",
            linkedin: "https://www.linkedin.com/in/jescacena/",
            github: "jescacena",
        };
    }
    _handleMediaQuery(event) {
        this._isMobile = event.detail.value;
    }
    render() {
        console.log("JES user profile render!!", this.data);
        return html `
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>

      <div class="container ${this._isMobile ? "mobile" : ""}">
        <img class="photo" src=${this.image} />
        <div class="profile">
          <h2>${this.data.name}</h2>
          <ul>
            <li class="occupation"><strong>${this.data.occupation}</strong></li>
            <li class="company">
              Company:
              <a target="_blank" href=${this.data.companyUrl}
                ><strong>${this.data.company}</strong></a
              >
            </li>
            <li class="location">
              Location:
              <a
                target="_blank"
                href="https://google.es/maps/place/${this.data.location}"
                ><strong>${this.data.location}</strong></a
              >
            </li>
            <li class="email">
              Email: <a href="mailto:${this.data.email}">${this.data.email}</a>
            </li>
            <li class="website">
              Website:
              <a target="_blank" href=${this.data.website}
                >${this.data.website}</a
              >
            </li>
          </ul>
          <ul class="social-links">
            <li class="github">
              <a target="_blank" href="https://github.com/${this.data.github}"
                ><img src=${githubIconBase64Encoded}
              /></a>
            </li>
            <li class="linkedin">
              <a target="_blank" href="${this.data.linkedin}"
                ><img src=${linkedIconBase64Encoded}
              /></a>
            </li>
            <li class="twitter">
              <a target="_blank" href="https://twitter.com/${this.data.twitter}"
                ><img src=${twitterIconBase64Encoded}
              /></a>
            </li>
          </ul>
        </div>
      </div>
    `;
    }
};
JwcUserProfile.styles = [styles];
__decorate([
    property()
], JwcUserProfile.prototype, "_query", void 0);
__decorate([
    property()
], JwcUserProfile.prototype, "_isMobile", void 0);
__decorate([
    property()
], JwcUserProfile.prototype, "_isMenuMobileVisible", void 0);
__decorate([
    property()
], JwcUserProfile.prototype, "image", void 0);
__decorate([
    property({
        attribute: "data",
        converter: (value) => {
            if (typeof value === "string") {
                return JSON.parse(value);
            }
        },
    })
], JwcUserProfile.prototype, "data", void 0);
JwcUserProfile = __decorate([
    customElement("jwc-user-profile")
], JwcUserProfile);
export { JwcUserProfile };
//# sourceMappingURL=jwc-user-profile.js.map