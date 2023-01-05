---
title: Creating a style guide with Jekyll
published: false
path: '/blog/jekyll-styleguide'
date: '2016-07-17'
image: null
---

## Our goals and requirements

- preserve the directory folder we currently have for our sass patterns and actively promote it by using the same structure in the navigation.
- allow our styles to the style the pattern library, if the pattern library was unstyled, its a failing of our CSS not providing that pattern. Nobody should look at the pattern library and find a UI pattern that they can't use in their project.

> Although we've named it a pattern library, I'm not sure if we have a pattern library, a style guide. maybe we built a style guide, the source file directory are the pattern library.

## Inspiration sites I like

- [scooter](http://dropbox.github.io/scooter/), i really like how the navigation matches the framework folder structure. how it documents Sass variables, functions and mixins.
- [U.S. Web Design Standards](https://playbook.cio.gov/designstandards/getting-started/), the descriptions are second to nonw, examples are easy to use
- [Lonely Planet](http://rizzo.lonelyplanet.com/styleguide/design-elements/colours), one of the original inspirations. I dream of the day we have templating system like thiers to allow the markup to be updated in line with any CSS or JS pattern updates.

## What was wrong with the other style guide generators? / other options?

The first iteration of our pattern library was using KSS. It was a revelation, automation mean that we had a pattern library up and running within a day (we just had to spend the next months converting docs to the KSS format, or writing the docs). KSS was hard to customise the markup, layout, structure. It uses a template language that just wasn't updated
we used grunt-kss and the maintainer stop working on it. New updates were being added as pull request but not merged, forking it just seemed like more work, more difficulty for future and current team members. It also does not natively support JS docs.
responsive patterns and media queries were difficult, no 'view full screen' toggle.
Many of the other style guide generators didn't allow any custom markup or classes to be added to the markup. This was vital as per our original goals.

## How I did it

of course this is subject to change when some great new idea comes about.

### with jekyll

theres a great community, help and support, updates and new features. its maintained. theres loads of tags and loops, we've not found anything we can't do yet.
a lot of our team know the syntax as we've been using it for our WDK documentation and many team members have their own github pages sites.

### why not use the pre made jekyll style guide templates?

other peoples code is always 'horrible'
I ended up customising so much of them that it resembled nothing of the original
maybe one day I'll open source the template we created, but I wouldn't expect anyone to use it!

### with grunt

Grunt is not essential to how the pattern library works but I wanted to automate the process of building the docs so that the whole team felt they were able to do it.
One of the main aims of the build was to keep the pattern library separate from the Sass and JS files. I don't want to be reconfiguring our whole code base every time we switch how the pattern library is made. For this reason, we use [grunt-copy]() to copy the `README.md` we store with each pattern and place it in the correct Jekyll directory.
We then use [grunt-contrib-watch](), to copy files and run jekyll and rebuild the pattern library when any file is changed.

### the code

## Its never finished / disclaimer

Iterating, starting again from scratch, etc is all part of the process.
this was my first ever pattern lib / style guide and you can't learn without making mistakes

## Whats next

- get more js in to it
- get more people using it and feeling like they can update it
- write more text descriptions etc.
- Its still in very early stages but we'd love to share it with you one day.
