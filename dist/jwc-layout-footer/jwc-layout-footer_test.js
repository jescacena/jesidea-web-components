import { JwcLayoutFooter } from "./jwc-layout-footer";
import { fixture, html } from "@open-wc/testing";
const assert = chai.assert;
suite("jwc-layout-footer", () => {
    test("is defined", () => {
        const el = document.createElement("jwc-layout-footer");
        assert.instanceOf(el, JwcLayoutFooter);
    });
    test("renders copyright section", async () => {
        const el = (await fixture(html `<jwc-layout-footer></jwc-layout-footer>`));
        const copyrightElement = el.shadowRoot.querySelector(".copyright");
        console.log("JES copyrightElement -->", copyrightElement);
        assert.isNotEmpty(copyrightElement === null || copyrightElement === void 0 ? void 0 : copyrightElement.innerHTML);
    });
    test("renders social links", async () => {
        const socialLinkItems = [
            { type: "github", url: "https://github.com/jescacena" },
        ];
        const el = await fixture(html `<jwc-layout-footer
        .socialLinkItems=${socialLinkItems}
      ></jwc-layout-footer>`);
        const results = el.shadowRoot.querySelectorAll(".social-link-item");
        assert.strictEqual(results === null || results === void 0 ? void 0 : results.length, 1);
    });
});
//# sourceMappingURL=jwc-layout-footer_test.js.map