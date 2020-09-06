import { JwcUserProfile } from "./jwc-user-profile.js";
import { fixture, html } from "@open-wc/testing";

const assert = chai.assert;

suite("jwc-user-profile", () => {
  test("is defined", () => {
    const el = document.createElement("jwc-user-profile");
    assert.instanceOf(el, JwcUserProfile);
  });

  test("renders name property", async () => {
    const mydata = { name: "Jander Clander" };
    const el = (await fixture(
      html`<jwc-user-profile .data=${mydata}></jwc-user-profile>`
    )) as JwcUserProfile;
    const nameElement = el.shadowRoot!.querySelector("h2");
    assert.strictEqual(nameElement?.innerText, mydata.name);
  });

  test("mobile class is added on responsive", async () => {
    const el = (await fixture(
      html`<jwc-user-profile></jwc-user-profile>`
    )) as JwcUserProfile;
    el._isMobile = true;
    await el.updateComplete;
    const containerElement = el.shadowRoot!.querySelector(".container");
    const containsMobile =
      containerElement?.classList.toString().indexOf("mobile") !== -1;

    assert.isTrue(containsMobile);
  });

  // test('renders with default values', async () => {
  //   const el = await fixture(html`<jwc-user-profile</jwc-user-profile`);
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, World!</h1>
  //     <button part="button">Click Count: 0</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('renders with a set name', async () => {
  //   const el = await fixture(html`<my-element name="Test"></my-element>`);
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, Test!</h1>
  //     <button part="button">Click Count: 0</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('handles a click', async () => {
  //   const el = (await fixture(html`<my-element></my-element>`)) as MyElement;
  //   const button = el.shadowRoot!.querySelector('button')!;
  //   button.click();
  //   await el.updateComplete;
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, World!</h1>
  //     <button part="button">Click Count: 1</button>
  //     <slot></slot>
  //   `
  //   );
  // });
});
