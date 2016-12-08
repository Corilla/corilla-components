import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import MarkdownPreview from './MarkdownPreview';

test('render with null text', (t) => {
  const wrapper = shallow(<MarkdownPreview />);
  t.truthy(wrapper.find(MarkdownPreview));
});

test('render with correct value', (t) => {
  const wrapper = shallow(<MarkdownPreview text="# Heading" />);
  const html = wrapper.render();
  const heading = html.find('h1');
  t.is(heading.text(), 'Heading');
});
