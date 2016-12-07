import React from 'react';
import { render } from 'react-dom';

import { MarkdownPreview } from '../lib/MarkdownPreview';

import './style.scss';

const ExampleApp = () => (
  <div>
    <h1>Corilla React UI Components</h1>
    <section>
      <h2>MarkdownPreview</h2>
      <article>
        <h3>Example</h3>
        <MarkdownPreview text={'# H1'} />
        <MarkdownPreview text={'## H2'} />
        <MarkdownPreview text={'*Italic text*'} />
        <MarkdownPreview text={'**Bold list title**'} />
        <MarkdownPreview text={'1. item 1\n 1. item 2\n 1. item 3'} />
      </article>
    </section>
  </div>
);

render(
  <ExampleApp />,
  document.getElementById('example-app')
);
