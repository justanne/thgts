---
layout: post
title: Box-Sizing an Image
published: true
tags:
- css
- tips

---

Recently while I'm adding a feature image on the blog entries I encountered somewhat an obvious thing that we should be aware of. We know how `box-sizing` keeps the [border and the padding inside the box](http://css-tricks.com/box-sizing/) instead of adding extra width on the box outside. But do you know that if you apply it to an image itself together with a border, it will distort/blur the image by squeezing it inside? This is not what we want especially if you have the image optimized for a fixed width and height.

<pre class="codepen" data-height="300" data-type="result" data-href="klbnz" data-user="justanne" data-safe="true"> <code> </code> <a href="http://codepen.io/justanne/pen/klbnz">Check out this Pen!</a> </pre>
<script async src="http://codepen.io/assets/embed/ei.js"></script>