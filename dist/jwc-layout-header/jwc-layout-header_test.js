import { JwcLayoutHeader } from "./jwc-layout-header";
// import { fallbackImageBase64Encoded } from "./jwc-layout-header.styles";
import { fixture, html } from "@open-wc/testing";
const assert = chai.assert;
suite("jwc-layout-header", () => {
    test("is defined", () => {
        const el = document.createElement("jwc-layout-header");
        assert.instanceOf(el, JwcLayoutHeader);
    });
    test("menu mobile is hidden on init", async () => {
        const el = (await fixture(html `<jwc-layout-header></jwc-layout-header>`));
        const headerElement = el.shadowRoot.querySelector(".menu-mobile");
        assert.isFalse(headerElement === null || headerElement === void 0 ? void 0 : headerElement.classList.contains("visible"));
    });
    test("menu mobile displays on menu mobile icon click", async () => {
        const el = (await fixture(html `<jwc-layout-header></jwc-layout-header>`));
        el._isMobile = true;
        await el.updateComplete;
        const menuMobileIcon = el.shadowRoot.querySelector(".menu-mobile-icon");
        menuMobileIcon.click();
        await el.updateComplete;
        const headerElement = el.shadowRoot.querySelector(".menu-mobile");
        assert.isTrue(headerElement === null || headerElement === void 0 ? void 0 : headerElement.classList.contains("visible"));
    });
});
//# sourceMappingURL=jwc-layout-header_test.js.map