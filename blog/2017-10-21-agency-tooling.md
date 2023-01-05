---
title: Frontend Tooling in an Agency Enviroment
path: '/blog/agency-tooling'
date: '2017-10-21'
---

This posts is, in essence, a list of things that I wish we were using more of in my current role and a list of excuses as to why we aren't doing them.

I've found out that tooling and optimisations are often overlooked in an agency enviroment as the focus moves on to the next project.

## What sort of tools am I talking about?

- Pattern libraries
- Browser sync
- Linters
- Image optimisers
- Regression testing
- Pull requests

## The challenges

### Getting the stakeholder on board

It's often felt that if we made a website previously without using this, we don't need it now. If our existing sites are live with bloated CSS but are still making money, why would we need to remove the bloat?

### Projects move on

It's not often that you get to go back an optimise an old site build. For this reason, projects get left on old technolgy and we have no unified, single way of doing things.
Some sites use Grunt, others Gulp. Some use Sass, others Less.
We are unable then to apply the same tooling improvements to all sites.

## The benefits

## Things that slow us down but improve our outputs

- Linters that don't let you deploy unless they pass.
- Making pull requests a requirement no matter how small
- ‎image optimization (this shouldn't really slow us down, but it could. Working out responsive image sizes etc)

## Things that speed us up

- Gulp
- Browser sync
- Regression testing
