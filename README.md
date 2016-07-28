# 🐧  pcss

> a low-level css toolkit

pcss is a set of immutable styles and utilities, written in Sass, for building sites with a minimal amount of css.

inspired by
* [basscss](https://basscss.com) by [Brent Jackson](https://twitter.com/jxnblk)
* [tachyons](https://tachyons.io) by [Adam Morse](https://twitter.com/mrmrs_)

if you want to learn more about functional css, I recommend reading [CSS and Scalability](http://mrmrs.io/writing/2016/03/24/scalable-css/) by Adam

## installation

```
bower install --save pcss
```

include it into your sass project:

```
@import "bower_components/pcss/src/pcss"
```

or add the compiled versions from the `/dist` folder to your app

##  naming convention

pcss follows this naming convention:

```css
.${shorthand property}-${shorthand value}
```

ex:

```sass
.va-m     // vertical-align: middle
.f-l      // float: left
.o-h      // overflow: hidden
.d-b      // display: block
.ta-l     // text-align: left
.fw-500   // font-weight: 500
```

> **note** there are a few exceptions, like some utility classes (hide, nowrap, truncate). to read more about the naming convention and see a list of classes, read the [docs]()
