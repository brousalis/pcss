# pcss

> low-level css toolkit

inspired by
* [basscss](https://basscss.com) by [Brent Jackson](https://twitter.com/jxnblk)
* [tachyons](https://tachyons.io) by [Adam Morse](https://twitter.com/mrmrs_)

if you want to learn more about functional css, read [CSS and Scalability](http://mrmrs.io/writing/2016/03/24/scalable-css/)

### so what's the difference?

pcss follows this naming convention (with few exceptions):

```css
.${shorthand property}-${value}
```

ex:

```css
.va-middle - vertical-align: middle
.f-left - float: left
.o-hidden - overflow: hidden
```

## installation

if you're using bower:

```
bower install --save pcss
```

the minified files can be found in the `/dist` folder. or, if you're using sass and want to override some of the variables:

```
@import "bower_components/pcss/pcss"
```
