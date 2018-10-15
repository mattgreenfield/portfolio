---
title: Improving page speed in the Create application
path: '/blog/create-performance'
date: '2016-10-30'
---

Working with a 'legacy code base' has it problems, over the last 15 years assets have come and gone, been added to, re-written etc etc. All this has led to a build up of files that are slowing down page load times but that everyone is scared to touch.

As part of a recent re-skin of the system, and thanks to the last 2 years of refactoring how we serve and build assets, I realised we had dramatically reduced the amount of cruft being loaded.

Here's an example from just one page;

## Before

### CSS

- reset.css
- interface.css
- forms.css
- css-buttons.css
- modalv2.css

### IMG

- loader.gif
- pagebuilder.png
- help_circle.png
- edit.png
- options.png
- shop.png
- del.png
- page.png
- add.png

### JS

- classlist.min.js
- addeventlistener.min.js
- jquery.min.js
- jquery-temp.js
- jquery.ui.nestedSortable.js
- modalv2.js

## After

### CSS

- core.min.css
- site-content-pages.min.css

### IMG

None.

### JS

- jquery.min.js
- core.min.js
- jquery-ui.min.js
- jquery.ui.nestedSortable.js

## What we've done

- Replaced all image icons with inline svg. There a now no (0, nothing.) images downloaded on the page. Granted, we made the page itself bigger and the inline SVG isn't cacheable, but we think its worth it, expecially when you consider all the other benefits of using SVG over images or icon fonts.
- Moved ( or re-wrote) all CSSS in to core.min.css, a file built with our gulp workflow. Bringing the benefits of concatanating, minifying and all the other magic that gulp tasks such as cleanCss do.
- Starting feature detection with an inline build of modernizr and used it to only load polyfill js files when required. thus removing classlist.min.js and addeventlistener.min.js for 'modern' browsers.
- Rewrote the pages modals to use our 'standard' modal pattern, included in core.js, meaning no need for modalv2.js and modalv2.css
- Moved all external assets to a CDN. Improving download speeds and caching.

## Still to do

We're loading jquery.min.js, jquery-ui.min.js and jquery.ui.nestedSortable.js for only one purpose - nestable drag and drop ordering. We've used the vanilla javascript drang and drop library [Dragula](https://bevacqua.github.io/dragula/) in other areas of the application. The only thing stopping us using it here seems to be the lack of support for nesting items. But it's something we should spend more time looking at as these 3 files are massive and really shouldn't be here (We could even load them asynchronously for now).

The above is for just one page of the application and whilst some of the changes are global, lots of other pages need this special attention too.
