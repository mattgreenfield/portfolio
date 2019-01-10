---
title: My New Portfolio
path: '/blog/gatsby-portfolio'
date: '2019-01-04'
---

Well it wouldn't be a new year without a new portfolio site design from me! But this time I've completly rewritten the code from the ground up.

Here's how and why I'm using [Gatsby](https://www.gatsbyjs.org/) to build the site and hosting it on [Netlify](https://www.netlify.com/).

## Why Gatsby

I'm a big fan of React as it allows component based front ends but also because of the amount of open source components and tooling.
Gatsby handles all the project set up, routing and optimisations for me.
I no longer have to worry about making my images responsive and optimizing for screen size, Gatsby lets me get on with making the site my own and writing the content.
Things like offline usage and service workers are added out of the box with minimum config.

Some frameworks make it so hard to get something to render on the page, that you have no time or motivation left to make it look good and work well. This is not the case with Gatsby, the developer experience is near perfect!

## Why Netlify

I'd long used github pages to host my site but unfortnatley it doesn't work with Gatsby (although it may be able to serve the compiled code?).
Netlify is great becuase it works with Gatsby. In fact it it's optimized for it.
Just like with github pages, netlify will build my portfolio whenever I push to the master git branch.

It also removes the need for cloudflare as it handles SSL and asset caching. More info here https://www.netlify.com/blog/2017/03/28/why-you-dont-need-cloudflare-with-netlify/
