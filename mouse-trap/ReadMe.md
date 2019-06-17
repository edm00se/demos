# Mouse Trap

What's a mouse trap? Something which puts out bait, like cheese, and then snaps up the target mouse once it tries to grab that cheese.

What's this project? Nothing more than a simple attempt at playing with the content preview `meta` tags.

## Why?

Content previews are shown on many devices now, especially mobile. This is little more than a mini experiment, playing with the content headers to show alternative content to the actual page content.

## How?

This demonstration makes use of the [basic metadata for The Open Graph protocol](http://ogp.me/#metadata).

Add `meta` tags with the following properties:

- `og:title`
- `og:image`
- `og:description`

Ideally you should also include one with the canonical URL as `og:url`.

```html
<meta property="og:title" content="Some Title Here" />
<meta property="og:image" content="path/to/some.jpg" />
<meta property="og:image:secure_url" content="https://.../path/to/some.jpg" />
<meta property="og:description" content="Some witty, inspiring, or descriptive content here." />
<meta property="og:image:type" content="image/gif" />
<meta property="og:image:width" content="width_px" />
<meta property="og:image:height" content="height_px" />
<meta property="og:url" content="primary_url" />
```

## Want More?

[ogp.me](http://ogp.me/)

## License

MIT