---
title: Reducing CSS file size in Magento 2 sites
path: '/blog/magento-css'
date: '2017-10-04'
---

Magento 2 doesn't make reusable CSS easy. Multiple modules may recreate components but using differnt classes, we end up with duplicate code.
I set out to reduce the amount of CSS we ship to users.

## How we measured it

The first step to solving this problem was making everyone aware that it exists.
Magento compiles less in to CSS using it's own custom comilere and never actually shows you the compiled CSS file in your git project.
For this reason I've used Chrome Dev tools to track the size of CSS files. I've printed out some stats and stuck them on the wall next to me to remind the team of the problem and track our progress.

## How we resolved it

[Frontools](https://github.com/SnowdogApps/magento2-frontools) is an open source build tool for Magento 2 sites. It uses gulp and so (unlike Magento's compiler) we can add our own configuration.

- allowed us to add postcss tasks such as ccsnano
- Moving to one CSS file.
- allowed us to override a variable rather than add more CSS to override existing CSS (setting a Sass variable to 'null' rather than 'transparent' if we don't want a style).
- ‎we can no also overide entire scss files or choose not to include them at all
- We stop using extends as they can output more CSS than you'd expect. We are still extending placeholders when required.

We also removed the boilerplate that we added on top of Magento. It seemed like a good idea at the time to have a half way theme. Turns out it wasn't. We ended up having to overide both Magento AND our boilerplate, we'd sometimes have CSS 3 times!

## The results

Reduction in lines of CSS
Reduction in page load times and file size

## What more can be done

We need to make our classes more reusable and document them better so that people use them rather than reinventing them.
