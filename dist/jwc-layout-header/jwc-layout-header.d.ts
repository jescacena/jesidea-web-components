/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
import { LitElement } from "lit-element";
import "lit-media-query/lit-media-query.js";
import { JwcLayoutMenuItem } from "./jwc-layout-menu-item.type";
export declare class JwcLayoutHeader extends LitElement {
    static styles: import("lit-element").CSSResult[];
    _query: String;
    _isMobile: Boolean;
    _isMenuMobileVisible: Boolean;
    logo: string;
    menuItems: Array<JwcLayoutMenuItem>;
    _handleMediaQuery(event: any): void;
    _handleClick(): void;
    _toggleMenuMobile(): void;
    renderMenuItems(): import("lit-element").TemplateResult[];
    renderMenu(): import("lit-element").TemplateResult;
    renderMenuMobile(): import("lit-element").TemplateResult;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "jwc-layout-header": JwcLayoutHeader;
    }
}
//# sourceMappingURL=jwc-layout-header.d.ts.map