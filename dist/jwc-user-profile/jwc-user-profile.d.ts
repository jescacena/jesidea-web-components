/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement } from "lit-element";
import { JwcProfileData } from "./jwc-profile-data.type";
import "lit-media-query/lit-media-query.js";
/**
 * User profile element
 */
export declare class JwcUserProfile extends LitElement {
    static styles: import("lit-element").CSSResult[];
    _query: String;
    _isMobile: Boolean;
    _isMenuMobileVisible: Boolean;
    _handleMediaQuery(event: any): void;
    image: string | null;
    data: JwcProfileData;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "jwc-user-profile": JwcUserProfile;
    }
}
//# sourceMappingURL=jwc-user-profile.d.ts.map