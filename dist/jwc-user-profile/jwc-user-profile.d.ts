/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement } from 'lit-element';
import { JwcProfileData } from "./jwc-profile-data.type";
/**
 * User profile element
 */
export declare class JwcUserProfile extends LitElement {
    static styles: import("lit-element").CSSResult;
    image: string | null;
    data: JwcProfileData;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'jwc-user-profile': JwcUserProfile;
    }
}
//# sourceMappingURL=jwc-user-profile.d.ts.map