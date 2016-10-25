import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import MarkdownPreview from './MarkdownPreview';

/* eslint-disable no-unused-expressions */
describe('MarkdownPreview', () => {
  it('should render with null text', () => {
    const renderer = renderIntoDocument(<div><MarkdownPreview /></div>);
    expect(renderer).to.be.ok;
  });

  it('should render with correct value', () => {
    const renderer = renderIntoDocument(<div><MarkdownPreview text="# Heading"/></div>);
    expect(renderer).to.be.ok;

    const dom = ReactDOM.findDOMNode(renderer).firstChild;
    const heading = dom.getElementsByTagName('h1')[0];
    expect(heading).to.exist;
    expect(heading.textContent).to.equal('Heading');
  });
});
