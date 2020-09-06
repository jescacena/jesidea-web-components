/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */

import { LitElement, customElement, property, html } from "lit-element";

import "lit-media-query/lit-media-query.js";
// import { classMap } from "lit-html/directives/class-map";

import {
  styles,
  githubIconBase64Encoded,
  linkedIconBase64Encoded,
  twitterIconBase64Encoded,
} from "./jwc-layout-footer.styles";
import { JwcSocialLinkItem, SocialLinkType } from "./jwc-social-link-item";

@customElement("jwc-layout-footer")
export class JwcLayoutFooter extends LitElement {
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

  @property({
    attribute: "social-link-items",
    converter: (value: any, type: any) => {
      // `value` is a string
      // Convert it to a value of type `type` and return it
      console.log("JES footer type", type);

      if (typeof value === "string") {
        return JSON.parse(value);
      }
    },
  })
  socialLinkItems: Array<JwcSocialLinkItem> = [
    { type: SocialLinkType.Github, url: "https://github.com/jescacena" },
    {
      type: SocialLinkType.Linkedin,
      url: "https://www.linkedin.com/in/jescacena",
    },
    { type: SocialLinkType.Twitter, url: "https://twitter.com/javiescacena" },
  ];

  _getIconBySocialNetwork(type: SocialLinkType): string {
    switch (type) {
      case SocialLinkType.Github:
        return githubIconBase64Encoded;
      case SocialLinkType.Linkedin:
        return linkedIconBase64Encoded;
      case SocialLinkType.Twitter:
        return twitterIconBase64Encoded;
      default:
        console.log(
          "Error _getIconBySocialNetwork: no icon for this network type"
        );
        return "";
    }
  }

  _renderItems() {
    return this.socialLinkItems.map((item) => {
      return html`<li>
        <a target="_blank" href=${item.url} class="social-link-item"
          ><img src=${this._getIconBySocialNetwork(item.type)}
        /></a>
      </li>`;
    });
  }

  render() {
    console.log("JES render footer!!!");

    const currentYear = new Date().getFullYear();

    return html`
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>
      <div class="container">
        <ul class="social-links">
          ${this._renderItems()}
        </ul>
        <div class="copyright">
          © Copyright Javier Escacena ${currentYear}, All Rights Reserved.
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "jwc-layout-footer": JwcLayoutFooter;
  }
}
