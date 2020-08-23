/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement } from "lit-element";
import { JwcProjectData } from "./jwc-project-data.type";
import "lit-media-query/lit-media-query.js";
import { ClassInfo } from "lit-html/directives/class-map";
/**
 * Project card
 */
export declare class JwcProjectCard extends LitElement {
    static styles: import("lit-element").CSSResult[];
    _query: String;
    _isMobile: Boolean;
    image: string;
    containerClasses: ClassInfo;
    headerClasses: ClassInfo;
    data: JwcProjectData;
    connectedCallback(): void;
    _handleMediaQuery(event: any): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "jwc-project-card": JwcProjectCard;
    }
}
//# sourceMappingURL=jwc-project-card.d.ts.map