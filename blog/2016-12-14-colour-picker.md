---
title: Colour Picker Concept
image: '../../images/portfolio/dashboard.jpg'
path: '/blog/color-picker'
date: '2016-10-30'
---

Challenged with creating a colour picker that doesn't allow for poor colour choices, and a weekend at home alone, I wire-framed and prototyped this concept based on "colour collections".

## The Brief

- Sketch and prototype a colour picker, use a prototyping service such as [Marvel](https://marvelapp.com).
- Ensure picking horrible colour combinations is as difficult as possible.
- Allow colour palettes (or collections) that can be shared and uploaded.

## First steps

I began by sketching with a pen and paper, adding notes and requirements for each stage and working out some user flows. I wanted to test these user flows and so I turned to [Marvel](). Once I had converted my sketches to artboards in [Sketch](https://www.sketchapp.com/), I was able to upload them to Marvel and get playing around with the interactions.

<div class="grid">
    <div class="grid__item one-half">
        <iframe src="https://marvelapp.com/3fif7j6?emb=1" width="100%" height="600" allowTransparency="true" frameborder="0"></iframe>
        <a href="https://marvelapp.com/explore/431591/colour-picker" target="_blank">View on Marvel</a>.
    </div>
    <div class="grid__item one-half">
        <p>Marvel is a great service that allows Sketch files (or any other images really) to be made it to working protoypes, with buttons that move through the images. Its great to able to spend some time playing with the design and user flow before commiting to any code.</p>
        <p>The demo here will highlight the actionable elements when it is clicked.</p>
    </div>
</div>

## What happened next

Although I never had the chance to iterate on the prototype above, I did take the chance to play and build a HTML and Javascript prototype. It was a create chance to play around with json and the `<canvas>` element. What I built can be demo'd [here](http://mattgreenfield.co.uk/colour-palette-picker/) and the source code found [here](https://github.com/mattgreenfield/colour-palette-picker).
