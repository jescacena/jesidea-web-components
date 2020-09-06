/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement } from "lit-element";
import "lit-media-query/lit-media-query.js";
import { JwcSocialLinkItem, SocialLinkType } from "./jwc-social-link-item";
export declare class JwcLayoutFooter extends LitElement {
    static styles: import("lit-element").CSSResult[];
    _query: String;
    _isMobile: Boolean;
    _isMenuMobileVisible: Boolean;
    _handleMediaQuery(event: any): void;
    socialLinkItems: Array<JwcSocialLinkItem>;
    _getIconBySocialNetwork(type: SocialLinkType): string;
    _renderItems(): import("lit-element").TemplateResult[];
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "jwc-layout-footer": JwcLayoutFooter;
    }
}
//# sourceMappingURL=jwc-layout-footer.d.ts.map