/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */

import { LitElement, html, customElement, property } from "lit-element";
import { JwcProfileData } from "./jwc-profile-data.type";
import "lit-media-query/lit-media-query.js";

import {
  styles,
  githubIconBase64Encoded,
  linkedIconBase64Encoded,
  twitterIconBase64Encoded,
} from "./jwc-user-profile.styles";

/**
 * User profile element
 */

@customElement("jwc-user-profile")
export class JwcUserProfile extends LitElement {
  static styles = [styles];

  @property()
  _query: String = "(max-width: 800px)";

  @property()
  _isMobile: Boolean = (window as any).visualViewport.width < 800;

  @property()
  _isMenuMobileVisible: Boolean = false;

  _handleMediaQuery(event: any) {
    this._isMobile = event.detail.value;
  }

  @property()
  image: string | null = "http://jesidea.com/home/img/supermoco-julio-2020.png";

  @property({
    attribute: "data",
    converter: (value: any) => {
      if (typeof value === "string") {
        return JSON.parse(value);
      }
    },
  })
  data: JwcProfileData = {
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

  render() {
    console.log("JES user profile render!!", this.data);

    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    "jwc-user-profile": JwcUserProfile;
  }
}
