/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement, customElement, property, html } from "lit-element";

import "lit-media-query/lit-media-query.js";
import { classMap } from "lit-html/directives/class-map";

import {
  styles,
  fallbackImageBase64Encoded,
  hamburgerIconBase64Encoded,
} from "./jwc-layout-header.styles";
import { JwcLayoutMenuItem } from "./jwc-layout-menu-item.type";

@customElement("jwc-layout-header")
export class JwcLayoutHeader extends LitElement {
  static styles = [styles];

  @property()
  _query: String = "(max-width: 800px)";

  @property()
  _isMobile: Boolean = (window as any).visualViewport.width < 800;

  @property()
  _isMenuMobileVisible: Boolean = false;

  @property()
  logo: string = fallbackImageBase64Encoded;

  @property({
    attribute: "menu-items",
    converter: (value: any, type: any) => {
      console.log("JES type", type);

      if (typeof value === "string") {
        return JSON.parse(value);
      }
    },
  })
  menuItems: Array<JwcLayoutMenuItem> = [
    { label: "Home", url: "/home" },
    { label: "About", url: "/home/about" },
    { label: "Articles", url: "/home/articles" },
  ];

  _handleMediaQuery(event: any) {
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
      return html`<li>${item.label} &gt;</li>`;
    });
  }

  renderMenu() {
    return html`
      ${this._isMobile
        ? html`<a
            href="#"
            class="menu-mobile-icon"
            @click="${this._handleClick}"
            ><img src=${hamburgerIconBase64Encoded}
          /></a>`
        : html`<ul class="menu-desktop">
            ${this.renderMenuItems()}
          </ul>`}
    `;
  }

  renderMenuMobile() {
    const menuMobileClasses = {
      "menu-mobile": true,
      visible: this._isMenuMobileVisible.valueOf(),
    };
    return html`
      ${this._isMobile
        ? html` <div class=${classMap(menuMobileClasses)}>
            <div class="close" @click="${this._toggleMenuMobile}">X</div>
            <ul>
              ${this.renderMenuItems()}
            </ul>
          </div>`
        : html``}
    `;
  }

  render() {
    console.log("JES render header 222!!!", this.menuItems);

    const menu = this.renderMenu();
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    "jwc-layout-header": JwcLayoutHeader;
  }
}
