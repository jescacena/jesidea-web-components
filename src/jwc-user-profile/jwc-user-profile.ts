/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */

import { LitElement, html, customElement, property, css } from 'lit-element';
import { JwcProfileData } from "./jwc-profile-data.type";

/**
 * User profile element
 */

@customElement('jwc-user-profile')
export class JwcUserProfile extends LitElement {

    static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

    @property()
    image: string | null = null;

    @property()
    data: JwcProfileData = {
        name: 'Javier Escacena',
        username: null,
        occupation: 'Programmer',
        location: 'Cercedilla',
        company: '@paradigmate',
        email: 'javier.escacena@gmail.com',
        website: 'http://jesidea.com',
        twitter: '@javiescacena',
        linkedin: 'https://www.linkedin.com/in/jescacena/',
        github: 'jescacena'
    };

    render () {
        return html`
            <div>JESidea user JAR2 profile ${this.data.name}</div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'jwc-user-profile': JwcUserProfile;
    }
}
