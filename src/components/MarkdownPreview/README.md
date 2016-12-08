# MarkdownPreview

Uses [markdown-it](https://github.com/markdown-it/markdown-it) to render markdown text into html.

The following extensions are also used:
- [markdown-it-sanitizer](https://github.com/svbergerem/markdown-it-sanitizer) for making sure the output is safe when html is allowed
- [markdown-it-imsize](https://github.com/tatsy/markdown-it-imsize) to allow specific sizing for images


## Usage:

```js
<MarkdownPreview text={'# Hello World'} />
```

## TODO:
- Look at making options and plugins configurable. Not sure if this is really feasible.