import { JwcProjectCard } from "./jwc-project-card";
import { fallbackImageBase64Encoded } from "./jwc-project-card.styles";
import { fixture, html } from "@open-wc/testing";
const assert = chai.assert;
suite("jwc-project-card", () => {
    test("is defined", () => {
        const el = document.createElement("jwc-project-card");
        assert.instanceOf(el, JwcProjectCard);
    });
    test("renders with default values", async () => {
        const el = await fixture(html `<jwc-project-card></jwc-project-card>`);
        assert.shadowDom.equal(el, `
      <lit-media-query></lit-media-query>
      <div class="container mobile">
        <div class="header header-mobile">
          <h2>-Empty name-</h2>
          <img src=${fallbackImageBase64Encoded}>
        </div>
        <div class="right-list">
          <p>-Empty description-</p>
          <ul>
            <li class="website">
              <a href="-Empty website url-" target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>
    `);
    });
    test("renders with a set name", async () => {
        const myData = { name: 'My Project', description: '', website: '', repo: null, download: null };
        const el = await fixture(html `<jwc-project-card .data=${myData}></jwc-project-card>`);
        // console.log('JANDER el-->', el.shadowRoot);
        assert.shadowDom.equal(el, `
      <!---->&#10;      <lit-media-query>&#10;      </lit-media-query>&#10;      <div class="container mobile">&#10;        <div class="header header-mobile">&#10;          <h2><!---->${myData.name}<!----></h2>&#10;          <img src=${fallbackImageBase64Encoded}>&#10;        </div>&#10;        <div class="right-list">&#10;          <p><!----><!----></p>&#10;          <ul>&#10;            <li class="website">&#10;              <a target="_blank" href=""></a>&#10;            </li>&#10;            &#10;            &#10;          </ul>&#10;        </div>&#10;      </div>&#10;    <!---->
    `);
    });
    test("renders with a set image", async () => {
        const el = await fixture(html `<jwc-project-card image="http://jesidea.com/home/img/logo-jesidea.png"></jwc-project-card>`);
        assert.shadowDom.equal(el, `
      <!---->&#10;      <lit-media-query>&#10;      </lit-media-query>&#10;      <div class="container mobile">&#10;        <div class="header header-mobile">&#10;          <h2><!---->-Empty name-<!----></h2>&#10;          <img src="http://jesidea.com/home/img/logo-jesidea.png">&#10;        </div>&#10;        <div class="right-list">&#10;          <p><!---->-Empty description-<!----></p>&#10;          <ul>&#10;            <li class="website">&#10;              <a target="_blank" href="-Empty website url-"></a>&#10;            </li>&#10;            &#10;            &#10;          </ul>&#10;        </div>&#10;      </div>&#10;    <!---->
    `);
    });
    test("renders with a set download url", async () => {
        const myData = { name: 'My Project', description: '', website: '', repo: null, download: 'http://kaka.com' };
        const el = await fixture(html `<jwc-project-card .data=${myData}></jwc-project-card>`);
        // console.log('JANDER el-->', el.shadowRoot);
        assert.shadowDom.equal(el, `
      <!---->&#10;      <lit-media-query>&#10;      </lit-media-query>&#10;      <div class="container mobile">&#10;        <div class="header header-mobile">&#10;          <h2><!---->${myData.name}<!----></h2>&#10;          <img src=${fallbackImageBase64Encoded}>&#10;        </div>&#10;        <div class="right-list">&#10;          <p><!----><!----></p>&#10;          <ul>&#10;            <li class="website">&#10;              <a target="_blank" href=""></a>&#10;            </li> <li class="download">
            <a
              href="http://kaka.com"
                target="_blank"
              >
              </a>
            </li>
            &#10;            &#10;            &#10;          </ul>&#10;        </div>&#10;      </div>&#10;    <!---->
    `);
    });
});
//# sourceMappingURL=jwc-project-card_test.js.map