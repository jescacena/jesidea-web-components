/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */

import { LitElement, customElement, property, html } from "lit-element";
import { JwcProjectData } from "./jwc-project-data.type";
import "lit-media-query/lit-media-query.js";
import { classMap, ClassInfo } from "lit-html/directives/class-map";

import { styles, fallbackImageBase64Encoded } from "./jwc-project-card.styles";

/**
 * Project card
 */
@customElement("jwc-project-card")
export class JwcProjectCard extends LitElement {
  static styles = [styles];

  @property()
  _query: String = "(max-width: 800px)";

  @property()
  _isMobile: Boolean = (window as any).visualViewport.width < 800;

  @property()
  image: string = fallbackImageBase64Encoded;

  @property()
  containerClasses: ClassInfo = { container: true, mobile: false };

  @property()
  headerClasses: ClassInfo = { header: true, "header-mobile": false };

  @property({
    attribute: 'data',
    converter: (value: any, type: any) => {
      if(typeof(value) === 'string') {
        return JSON.parse(value);
      }
    }
  })
  data: JwcProjectData = {
    name: "-Empty name-",
    description: "-Empty description-",
    website: "-Empty website url-",
    repo: null,
    download: null,
  };

  connectedCallback() {
    super.connectedCallback();
    // console.log('connected')
  }

  _handleMediaQuery(event: any) {
    this._isMobile = event.detail.value;

    this.containerClasses = {
      container: true,
      mobile: this._isMobile.valueOf(),
    };
    this.headerClasses = {
      header: true,
      "header-mobile": this._isMobile.valueOf(),
    };
    // console.log('JES _handleMediaQuery', this._isMobile, this.containerClasses);
  }
  render() {
    this.containerClasses = {
      container: true,
      mobile: this._isMobile.valueOf(),
    };
    this.headerClasses = {
      header: true,
      "header-mobile": this._isMobile.valueOf(),
    };

    // console.log('JES render!!',this.containerClasses);
    // console.log('JES jwc-project-card data prop-->', this.data);

    var downloadIcon = this.data.download
      ? html`
          <li class="download">
            <a href="${this.data.download}" target="_blank"></a>
          </li>
        `
      : "";

    var repoIcon = this.data.repo
      ? html`
          <li class="repository">
            <a href="${this.data.repo}" target="_blank"></a>
          </li>
        `
      : "";

    return html`
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>
      <div class=${classMap(this.containerClasses)}>
        <div class=${classMap(this.headerClasses)}>
          <h2>${this.data.name}</h2>
          <img src="${this.image}" />
        </div>
        <div class="right-list">
          <p>${this.data.description}</p>
          <ul>
            <li class="website">
              <a href="${this.data.website}" target="_blank"></a>
            </li>
            ${downloadIcon} ${repoIcon}
          </ul>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "jwc-project-card": JwcProjectCard;
  }
}
