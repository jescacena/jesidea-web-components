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
import { LitElement, customElement, property } from 'lit-element';
/**
 * Project card
 */
let JwcProjectCard = class JwcProjectCard extends LitElement {
    constructor() {
        super(...arguments);
        this.image = null;
        this.data = {
            name: 'Codersnack',
            description: 'Learn and review your programming skills with snacks',
            website: 'http://codersnack.com',
            repo: null,
            download: 'https://play.google.com/store/apps/details?id=com.jes.codesnack_app'
        };
    }
};
__decorate([
    property()
], JwcProjectCard.prototype, "image", void 0);
__decorate([
    property()
], JwcProjectCard.prototype, "data", void 0);
JwcProjectCard = __decorate([
    customElement('jwc-project-card')
], JwcProjectCard);
export { JwcProjectCard };
;
//# sourceMappingURL=jwc-project-card.js.map