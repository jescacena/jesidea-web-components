import { JwcProjectCard } from './jwc-project-card';
// import {fixture, html} from '@open-wc/testing';
const assert = chai.assert;
suite('jwc-project-card', () => {
    test('is defined', () => {
        const el = document.createElement('jwc-project-card');
        assert.instanceOf(el, JwcProjectCard);
    });
});
//# sourceMappingURL=jwc-project-card_test.js.map