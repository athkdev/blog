---
title: Minecraft chunk with Procedural Terrain Generation
date: 2024-10-03
---

![Gif image for the portfolio siite](https://cdn.athk.dev/gif/minecraft.gif)

This is one of my absolutely favorite projects I've worked on. I love Minecraft. I love procedural generation. I love JavaScript.

## Objective and philosophy

The idea is to generate a Minecraft chunk (just a huge cube with x, y and z which will contain smaller cubes) randomly the way it actually is generated in the game. The game uses Perlin Noise to generate terrain. Perlin Noise is one of the most common noise that is used with various games for terrain generation that was invented by Ken Perlin.

We use Three.js to map cubes and fill a chunk with them. But since we need variable height so it looks like a real terrain, we use Perlin Noise. The Perlin Noise function takes in (x, y) coordinates and generates some floating value. We can use this floating value while placing the blocks in the chunk, to give them a variable height. This is what makes it look a real terrain.

## Optimization

Our chunk size for this project is $300 * 300 * HEIGHT$ where HEIGHT varies between 1 to 15. That means the lowest point will be 1 (plains) and highest will be 15 (peaks). That is an insanely large number of blocks to be created, rendered, and placed into placed.

That's a LOT of blocks (a max of $9 * 10^5$ blocks) - which gets pretty compute heavy to render. To tackle that there are some techniques available like [frustum culling](https://learnopengl.com/Guest-Articles/2021/Scene/Frustum-Culling), [occlusion culling](https://docs.godotengine.org/en/stable/tutorials/3d/occlusion_culling.html), and [geometric merging](https://medium.com/acrossthegalaxy/unity-tip-combine-meshes-for-performance-and-organization-c3515c844fdb).

- **Frustum culling:** it's the process of not rendering meshes/objects which are outside of the camera frustum. This is already done by `three.js` so you don't have to manually implement it.

- **Occlusion culling:** it's the process of not rendering meshes/objects which are hidden to the camera by _other objects_. This is _not_ implemented by `three.js`, so you have to implement it manually. NOTE: we haven't done this yet - so there's room for improvement.

- **Geometric merging:** it's the process of merging multiple similar meshes/objects that share a similar geometry and materials, into a single large mesh. This helps increase performance because the number of vertices to process declines significantly. In our scenario, there are at a maximum of $3 * 10^5$ blocks which share the same geometry and materials, so we merge all of them to get one large mesh (our chunk). This is also not done by `three.js`, we have to manually implement merging.

## Breaking down the tech stack

#### For the frontend

We use HTML5, CSS and JavaScript along with a CDN link to Three.js.

We use Three.js for graphics and 3D rendering since it provides one of the best WebGL APIs for the browser.

#### For the backend logic

There's no database, and we use Vercel to deploy.

## Future ideas

Since we have a basic procedural chunk renderer with textures setup, it would be fun to move toward applying [three.js shaders](https://threejs.org/docs/#api/en/materials/ShaderMaterial) to the render. If you have any suggestions or contributions, feel free to open an issue or a PR - I would be more than happy to go over them.

## References

The textures are [Vanilla PBR](https://www.curseforge.com/minecraft/texture-packs/vanilla-pbr) minecraft textures from [curseforge.com](https://curseforge.com/).

You may find the code, how I modularized the components and how I structured the code-base here on [GitHub](https://github.com/athkdev/minecraft).

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
