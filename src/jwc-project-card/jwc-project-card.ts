/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */

import { LitElement, customElement, property } from 'lit-element';
import { JwcProjectData } from "./jwc-project-data.type";

/**
 * Project card
 */

@customElement('jwc-project-card')
export class JwcProjectCard extends LitElement {

    @property()
    image: string | null = null;

    @property()
    data: JwcProjectData = {
        name: 'Codersnack',
        description: 'Learn and review your programming skills with snacks',
        website: 'http://codersnack.com',
        repo: null,
        download: 'https://play.google.com/store/apps/details?id=com.jes.codesnack_app'
    };
};

declare global {
    interface HTMLElementTagNameMap {
        'jwc-project-card': JwcProjectCard;
    }
}