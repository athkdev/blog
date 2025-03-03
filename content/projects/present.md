---
title: Present - a presentation app
date: 2024-10-01
---

![Gif image for the presenation app](https://cdn.athk.dev/gif/present.gif)

This is a full-stack presentation app, very similar to Google Slides, Microsoft Powerpoint or Canva. This was a final project for my web development class (INFO 6150) at Northeastern University. I also did a presentation (that I made using this app hahah), and received a 206/200 for the project.

## Objective and philosophy

The objective of the application is make the workflow of creating, and sharing presentations blazingly fast. The app is built with a "animation first" approach keeping in mind. This means animations are first-class efffects and they can be just drag and dropped on presentation components.

Technically speaking, at the atomic level, every component in a presentation is just a JavaScript object that stores data such as height, width, x position, y position, scale, effects, and some basic things.

To visualize, think of the presentation as a tree where the background (presentation screen) is the root. Then comes a page, and any components placed on it (images, videos, texts) are just nested into the tree. For every presentation, this "tree" is stored in the database with user authentication.

Looks something like this: `presentation` -> `page` -> `component (image, text, videos)` -> `effects`

When the presentation needs to played, we query this "tree" from the DB and render all components in a page. When the user changes pages, all elements from the previous page are unmounted and the newer page elements are mounted.

## Breaking down the tech stack

#### For the frontend

We are using React along with NextJS. NextJS is a React framework that makes using React streamlined since it's opiniated. That means things like project directory structure matter (much like Angular). NextJS also makes using Server components very easy. For React components, we have used a combination of `Chakra UI` and `ShadCN` components. For styling we are strictly using `Tailwind CSS`, cuz Tailwind's the best.

Since it's a presentation app, there's going to be a lot of drag and drop. Dragging and dropping images, effects, etc. For this we use React DnD - it's a npm package that provides a simplistic React API for drag and drop. It provides events for listening to dropped items, make dropable items, and so on - you get it.

#### For the backend logic

We use NextJS API routes along with Server components. This is very convenient because we can write the entire app logic in one language (Typescript).

For a database, we use PostgreSQL (the mighty elephants). Vercel provides free PostgreSQL instance for hosting on the free tier.

The entire application is hosted on Vercel (the free tier, honestly Vercel is amazing for indie developers or beginners). You can use the project on [https://present.athk.dev/present](https://present.athk.dev/present).

You may find the code, how I modularized the components and how I structured the code-base here on [GitHub](https://github.com/athkdev/present).

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
