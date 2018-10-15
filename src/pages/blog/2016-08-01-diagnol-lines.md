---
title: The Diagonal Problem
featured: true
path: '/blog/diagnol-lines'
date: '2016-08-01'
---

You may have noticed the diagonal lines in my current site design, I wanted to blog a little bit about them and how I got them to where they are now.

## The Problem

The trouble with the internet (or browsers should I say), is that they output squares and parallel lines.
This can lead to very 'blocky' designs. It's a limitation that print and web designers don't share and some really nice things can be achieved with circles and triangles as well as just squares and rectangles.

Browser limitations are why I love front end development so I thought I'd try and get away from all these parallel lines.
Circles have of course become more and more popular on the web (when was the last time you saw a profile photo NOT in a circle?!) and I'm seeing more and more diagonal lines online.

## The outcome

I wanted diagonal stripes of colour, that scale across differing device widths and don't litter the markup with empty elements.

## The failed attempts

### Attempt 1

My first attempt was using after elements with a fixed height and a width twice as large as the page, rotated with CSS transform.
It worked... until I resized the browser. Knowing what height and width to make the coloured element was near on impossible.
I'm sure there may have been some complex maths I could have done with [CSS viewport widths](https://snook.ca/archives/html_and_css/vm-vh-units) and `calc()` but it all just seemed a bit 'magic number'-ish.

### Attempt 2

It occurred to me that I was really just making a background image, and CSS3 can do lots of lovely things with background images and gradients.
Allowing multiple background images and background positions, I could place one coloured triangle image at the top of the page and another at the bottom.
So I built these triangles as SVG (to fulfil the scaleable and light goal) and put it to test.
It just wasn't to be, the way that the SVG scaled meant I had no real control over the angle of the diagonal.

## My final solution, the output.

My third attempt, and what is live on the site now, merged the two techniques together - pseudo elements and SVG.
I am now using a coloured after element with a triangular SVG background image that matches the page background (inlined in the CSS for an extra performance boost).
The biggest challenge was working with the SVG viewbox properties to ensure it scaled correctly.

> I plan to get back to this post and add some code examples, please nudge me if I haven't yet.
