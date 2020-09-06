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
    const el = (await fixture(
      html`<jwc-layout-header></jwc-layout-header>`
    )) as JwcLayoutHeader;
    const headerElement = el.shadowRoot!.querySelector(".menu-mobile");
    assert.isFalse(headerElement?.classList.contains("visible"));
  });

  test("menu mobile displays on menu mobile icon click", async () => {
    const el = (await fixture(
      html`<jwc-layout-header></jwc-layout-header>`
    )) as JwcLayoutHeader;
    el._isMobile = true;
    await el.updateComplete;
    const menuMobileIcon = el.shadowRoot!.querySelector(".menu-mobile-icon");
    (menuMobileIcon as any).click();
    await el.updateComplete;

    const headerElement = el.shadowRoot!.querySelector(".menu-mobile");
    assert.isTrue(headerElement?.classList.contains("visible"));
  });
});
