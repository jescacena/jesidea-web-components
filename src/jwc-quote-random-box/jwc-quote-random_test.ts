import { JwcQuoteRandomBox } from './jwc-quote-random-box.js';
// import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('jwc-quote-random-box', () => {
    test('is defined', () => {
        const el = document.createElement('jwc-quote-random-box');
        assert.instanceOf(el, JwcQuoteRandomBox);
    });
});

