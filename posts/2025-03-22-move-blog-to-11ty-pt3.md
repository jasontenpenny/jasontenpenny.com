---
title: Moving My Blog to 11ty - Part 3 (Building Layouts)
date: 2025-03-22 11:46:00 -5
tags: [blog, 11ty, static website, github, web development]
category: Web Development
excerpt: In part 2 we set up the folder structure in my blog project and configured the `eleventy.config.js` file so that we can pass CSS and other files through the parser for use by the templates. Now we get to move on to the concept of layouts.
redirect_from: /posts/move-blog-to-11ty-pt3
---

> This is part of a series on moving this blog from GitHub Pages (which uses Jekyll) to 11ty. You can read the overview of this project [here](https://jasontenpenny.com/posts/move-blog-to-11ty-prologue/).

In [part 2](https://jasontenpenny.com/posts/move-blog-to-11ty-pt2) we set up the folder structure in my blog project and configured the `eleventy.config.js` file so that we can pass CSS and other files through the parser for use by the templates. Now we get to move on to the concept of layouts.

## What are layouts

If you're new to the concept of static website generators, you might be wondering what layouts are used for. Think of this as the site's theme files. The layouts are templates control the layout (hence the name) of different elements on the page in a way that's reusable by any and all markdown files that use those layouts. This allows us to not worry about any theming pieces when writing articles. After publishing the article, the theme is automatically applied by the static website generator using the layout files we've created. It also means that if you want to tweak your layout, your changes are immediately applied to all pages using that layout the next time the site is built.

The layout files are going to contain all our HTML and CSS elements. So in order to display the various pieces of a post the way we want, we need to account for each element in the layout (and accompanying CSS templates). Examples would be headers and tables. We would input the actual data for those elements in the markdown file, but the job of the layout and theming is to determine how those elements look on the page.

## Organizing layout files

I don't think there is one right way to build layout files. Ultimately I think it's going to come down to what you plan to do with your site and your themes. You want to balance reusability and flexibility. For example, I see a lot of themes put their `<head>` elements in a separate layout (technically an include), and then call that file in all the other layouts. This ensures that you only have to make changes to your your `<head>` element in one place, and it's applied to the entire site. This can be really useful if you're wanting to add new stylesheets or things like that the entire site needs to use, but it can also mean that you don't have room for exceptions if you need one page to have separate head data. You would have to recreate the rest of the head separately in that particular layout. This is probably an example that wouldn't come up super often, since there's usually only metadata in the head element, and that's usually pretty consistent across a site.

Other examples of splitting out data that's reusable would be sidebars, footers, other things like that. If you have a sidebar that has word tags, you might want that to appear in multiple different layouts, but don't want to have to code it each time. So we can separate that out in a separate include file and call it from our layouts.

## Create includes for \<head\> and \<footer\>

For my project, I want to standardize my head information as well as the footer that appears across the site, so I'm going to go ahead and make those into separate include files. Both of these files will site in the *_includes* folder I created.

Here's what my `head.html` file will look like:

```html
<html>
    <head>
        <title>My Website</title>
        <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
        <!-- other head information goes here -->
    </head>
    <body>
```

Notice that I included the opening `<body>` tag. This isn't a requirement, but it means you don't have to include it on each layout. I am planning to use other HTML elements as containers that I'll be able to assign CSS tags and IDs to, so I don't need to worry about defining anything on the body tag itself.

Now for `footer.html`:

```html
        <footer>
        <!-- footer text will go here -->
        </footer>
    </body>
</html>
```

The actual footer is just a section of HTML that has a distinctive tag, but since this will be the bottom of all pages, I can close the `<body>` and `<html>` tags here as well.

## Create a default layout

Now we can put this all together in our first actual layout. I will call this one `default.html` and it will live in the *_layouts* folder.

{% raw %}

```html
{% include 'head.html' %}
    {{ content }}
{% include 'footer.html' %}
```

{% endraw %}

So this calls our head.html and footer.html files we created, and then uses a liquid shortcode to include the content of the markdown files that use this template.

## Setting a default layout for Eleventy

We can configure a default layout in our `eleventy.config.js` file so that we have something that will be used if we forget to set it in the frontmatter of a specific page or post.

Add the following code. Remember that there can only be one `export default function(eleventyConfig)` section, so this is text you'd add inside yours if it already exists.

```js
export default function(eleventyConfig) {

    // sets a default layout
    eleventyConfig.addGlobalData('layout', 'default.html');

}
```

Now if you rebuild your site, you should see that your existing pages now use this theme. It might not be obvious, but if you add something random into the layout or add some CSS, you'll see that reflected on the pages.

## Nesting layouts

Eleventy allows to nest or [chain layouts](https://www.11ty.dev/docs/layout-chaining/) for more granular control and so we can reuse existing work. So let's look at that. So far we've created something super generic that can serve as a default or base layout. But we will want to add more detail around how blog posts are laid out on the page, especially around the post metadata. We could add that in our default layout, but then any and all pages would use that. Instead, let's nest another more specific layout and reference the base layout.

Notice that we used the *content* liquid code to include the actual page content. Well this can also pull in entire layouts that are configured to use the default layout as their base. So let's create a layout for posts. We'll call it `post.html`.

{% raw %}

```html
---
layout: default.html
---
<h1>{{ page.title }}</h1>
<div>Published: {{ page.date }}</div>
{{ content }}
```

{% endraw %}

Ok so let's talk about what we're doing here. We've included some YAML frontmatter first, in which we're specifying the layout. This is effectively the layout for the layout. Then we're using some liquid tags to put in the post title and its publish date. Then we're putting in the *content* liquid tag again to include the actual text of the post.

There's one other piece that's required in order to use this layout, and that's to set this layout in the frontmatter of our post. So let's create `examplepost.md`.

{% raw %}

```md
---
layout: post.html
title: Example Blog Post
---

This is the text of my blog post.
```

{% endraw %}

Ok so what happens at publish time? Well first the markdown file is analyzed and it passes its content up to the defined layout, in this case `post.html`. It then combines the data in the post with the formatting in the layout. But it also sees that `post.html` has a layout defined, so it passes the combined data and formatting up to the `default.html` layout. All this gets included as part of the *content* tag. Then the rest of the formatting and CSS information is applied to the data, and this results in the finished page that gets published.

This process can be repeated multiple times. You could create another more specific layout that has its layout set to `post.html` and it would still work its way up.

## Wrap-up

So now we have some layouts to work with. This controls what information is laid out on the page in a consistent and uniform manner. Now the next step is to further flesh out the data that we want in these layouts and to work on theming them using CSS.
