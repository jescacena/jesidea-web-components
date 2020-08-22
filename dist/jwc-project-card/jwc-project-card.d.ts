/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement } from "lit-element";
import { JwcProjectData } from "./jwc-project-data.type";
/**
 * Project card
 */
export declare class JwcProjectCard extends LitElement {
    image: string | null;
    data: JwcProjectData;
}
declare global {
    interface HTMLElementTagNameMap {
        "jwc-project-card": JwcProjectCard;
    }
}
//# sourceMappingURL=jwc-project-card.d.ts.map