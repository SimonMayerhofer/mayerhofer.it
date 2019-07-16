<div align="center">
	<a href="https://www.mayerhofer.it"><img src="https://raw.githubusercontent.com/SimonMayerhofer/mayerhofer.it/master/src/assets/logo-icon.png" alt="Logo" width="200"></a>
	<br>
	<h1>Simon Mayerhofer's website</h1>
	<sub>Built with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a></sub>

![GitHub repo size](https://img.shields.io/github/repo-size/SimonMayerhofer/mayerhofer.it.svg)
![GitHub](https://img.shields.io/github/license/SimonMayerhofer/mayerhofer.it.svg)
![Uptime Robot status](https://img.shields.io/uptimerobot/status/m778813857-8ed930410d1833a9f4209219.svg)
![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m778813857-8ed930410d1833a9f4209219.svg?label=uptime%20last%2030%20days)

Visit it at [www.mayerhofer.it](https://www.mayerhofer.it).

</div>

---

## How to add a blog post

1. Create a new folder in `src/blog`. The name of the folder is going to be the slug of the page.
2. Create a file named `index.md` inside of this folder. Use markdown to format the post.

### Possible frontmatter variables

To add some variables to the post like the date or a SEO description use the following format at the very top of the markdown file:

```
---
title: 'Title of the blog post'
date: '2015-05-28T22:40:32.169Z'
description: 'This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.'
featuredImage: './featured-image.jpg'
---

Content of the blog post goes here...
```

### Add images to the blog post

If you want to add a image simply put it in the same folder like `index.md` file and link it in your blog post: `![Image Description](./image.jpg)`.

To add a featured image add the `featuredImage` variable to the frontmatter.

**Note:** the featured image should be 1024px wide. It's displayed with 1024px so save space by scaling it down if necessary.
