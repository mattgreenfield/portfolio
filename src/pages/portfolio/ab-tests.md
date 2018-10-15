---
title: AB testing
display-order: 1
image: portfolio/dashboard
path: '/work/a-b-testing'
---

As part of my role are [create.net](www.create.net) we are always testing new designs and content to increase engagement with our users, in particular, users on the free trial period.

This task involved changing the look of our 'trial dashboard', and implementing the changes as an A/B test using [Optimizely](https://www.optimizely.com/)

I was given the designs as a Sketch file from our visual designer Andy and decided that I would make the changes using CSS only and use Optimizely to switch out a class on the `<body>` that changes what CSS displays.

## Here's how it came out;

<div class="grid">
    <div class="grid__item one-half">

        <h3>Before</h3>

        <img src="/assets/img/portfolio/dashboard-original.jpg" alt="The trial dashboard shown with the original design" />

    </div>
    <div class="grid__item one-half">

        <h3>After</h3>
        <img src="/assets/img/portfolio/dashboard-variant.jpg" alt="The 'variant' design trial dashboard, colours and layout have changed" />

    </div>

</div>

## The challenges

- Setting up Google analytics event tracking that would report separately for each variant.
- Positioning the ticks in such a drastically different place without changing the markup.
- Ensuring that the CSS still worked when the order of the items was changed - I changed to using :last-child rather than targeting the third item with a unique class.

## The results

To be honest, I'm not entirely sure a variant this big can be of any use. It's hard to really tell which change had the biggest impact on conversions.
Early results indicate that
