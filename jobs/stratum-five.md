---
tags:
  [Vue, Typescript, ChartJs, PWA, VueX, Cypress, CSS, Sass, Canvas, Storybook]
name: StratumFive
slug: s5
job: Frontend developer
images: ["s5/1.png", "s5/2.png"]
date: 2018-11-00
endDate: 2020-11-00
---

At StratumFive, I worked on software that was designed to manage large ships, specifically those that carry shipping containers. Our team built multiple products, including a PWA that could be used offline at sea. The frontend was built with VueJS and TypeScript. To ensure the reliability and safety of our software, we integrated our Cypress tests with the deployment pipeline and worked to minimize downtime.

In addition to building a customizable dashboard with various chart types, we also created our own map layers for weather and port overlays. One example of this was a map layer that rendered every port in the world, and clustered them together based on the map zoom level. The data was fetched from a REST API.

Some of the challenges involved dealing with large datasets. We found the SVG based chart libraries struggled with so many DOM nodes and so moved to a canvas based chart library, this was a relatively simple switch due to how we'd built our components as an abstraction on top of the library. We also often used sampled data but had to employ some sampling algorithms to ensure outliers were not removed. The decision to do this in the frontend was made so that the user could zoom in to a dataset at speed and not require more network requests.

To manage the development of our shared component library, I implemented Storybook and used it to test and develop components with a large sample of test data. In my role, I also led two more junior frontend developers and worked with them to ensure the smooth operation of the project.
