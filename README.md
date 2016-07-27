# 🐧  pcss

> low-level css toolkit

inspired by
* [basscss](https://basscss.com) by [Brent Jackson](https://twitter.com/jxnblk)
* [tachyons](https://tachyons.io) by [Adam Morse](https://twitter.com/mrmrs_)

if you want to learn more about functional css, read [CSS and Scalability](http://mrmrs.io/writing/2016/03/24/scalable-css/)

##  what's the difference?

it's mostly for my own use, but it follows this naming convention:

```css
.${shorthand property}-${value}
```

ex:

```css
.va-middle  - vertical-align: middle
.f-left     - float: left
.o-hidden   - overflow: hidden
.d-block    - display: block
.ta-left    - text-align: left
.fw-500     - font-weight: 500
```

to read more about the naming convention and see a list of classes, read the [docs]()

## installation

if you're using bower:

```
bower install --save pcss
```

include it into your sass project by:

```
@import "bower_components/pcss/src/pcss"
```

or add the compiled versions from the `/dist` folder
