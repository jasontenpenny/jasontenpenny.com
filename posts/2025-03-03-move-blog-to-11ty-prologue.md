---
title: Moving My Blog to 11ty - Prologue
date: 2025-03-03 18:19:00 -6
tags: [blog, 11ty, static website, github, web development]
category: Web Development
featured-image:
    path: /assets/images/11ty_homepage.png
    alt: screenshot of the 11ty homepage
excerpt: Today I am starting a new series on moving my blog to 11ty. I stumbled across 11ty a couple of months ago and was intrigued. And there were a couple of things I wasn't quite happy with regarding the site configuration in GitHub Pages, so I wanted to rewrite it anyway.
redirect_from: /posts/move-blog-to-11ty-prologue/
---

Well it's been quite a while since my last blog post, so hello! Happy New Year! Happy (almost) daylight savings time! Etc.

Today I am starting a new series on moving my blog to [11ty](https://11ty.dev). I stumbled across 11ty a couple of months ago and was intrigued. And there were a couple of things I wasn't quite happy with regarding the site configuration in GitHub Pages, so I wanted to rewrite it anyway.

Posts in the series so far:

- [Part 1 - Initial Deployment](/posts/2025-03-03-move-blog-to-11ty-pt1.md)
- [Part 2 - Structure and basic config](/posts/2025-03-07-move-blog-to-11ty-pt2.md)
- [Part 3 - Building Layouts](/posts/2025-03-22-move-blog-to-11ty-pt3.md)

## Why do this at all?

Here are a few of the reasons I wanted to embark on this journey.

1. I like playing around, and a huge part of my learning with technology has been from experimenting with things (and often breaking them). I also like new and fresh, so getting to build something from scratch is always nice. So this is another opportunity to do both those things, and I'm planning to document this learning path for others.

2. This will let me scratch a web development itch that's been itching for a bit. I explored web development in middleschool and highschool... first with a copy of FrontPage 98, and then later with WordPress where I tried to figure out theming. So I understand how HTML and CSS works (at least fundamentally... there's a lot of the more modern CSS techniques that I have no idea about), and want to refresh my memory on these things.

3. This might give me an opportunity to poke at javascript a bit. I never learned any web programming languages like javascript, so the things I was doing on the web were always pretty basic. Since 11ty has a javascript element, this will be a good excuse to get more familiar with that.

4. I didn't really like the fact that the setup I have in GitHub pages requires the site to be in a public repository. Not that I'm trying to keep a bunch of secrets here, but I don't know... there might be some secret sauce to hide at some point 🙂. I could upgrade to a paid GitHub account, which could let me publish a private repository to GitHub Pages, but I don't feel like paying that money right now. Plus, I'd kimd of like to see how far I can take free.

5. I also wanted to check out both Cloudflare Pages and Azure Static Websites as alternatives to GitHub pages. Something I can't do with the current site (at least I don't think I can) is have a publicly viewable test environment. I have to publish to the main branch (or whatever branch is used for Pages) in order to view things publicly, but then it's... viewable publicly. Something I noticed about Cloudflare Pages, and it looks like Azure Static Websites can do this as well, is that I can publish multiple versions of the site based on different branches, thereby letting me have dev and prod versions of the site that are viewable publicly but at different URLs.

6. I would like a little more flexibility in how I structure the site. There might be ways to do this with Jekyll and/or a different theme, but it seems readily doable with 11ty. Plus, see all the preceding points. But one of the things I've been thinking about is a way to separate tech-related things I want to write about with other topics. I don't feel like there's a great way to do that with the current build.

## So why the specific tools?

- 11ty seems to be more flexible than Jekyll, especially Jekyll as deployed by GitHub pages. I can customize the structure of the site (posts can be in a folder called blog, not posts).
- 11ty doesn't perform any tracking, which is always nice in today's world.
- I've been using Cloudflare as my domain registrar and DNS host for ages, and I wanted to play around with some of their other features
- As I mentioned above, I wanted to be able to put my blog in a private repository in GitHub, and this is a way to do that.
- I still want to keep using a static website that is written in markup. I like that way of doing things, and setting up a WordPress site can be a bit overkill for my needs. Plus, WordPress has kind of gotten themselves in [hot water](https://techcrunch.com/2025/01/12/wordpress-vs-wp-engine-drama-explained/) recently.

## How long will this take?

I don't really know. I hope to work on this fairly consistently and keep writing up my progress. At some point there will be a cutover, but there's honestly nothing to say that I won't keep playing with it for a long time after I get a "version 1" deployed.

If I get it to a place I like that feels complete and usable for others, I might also look at separating out the necessary pieces to publish a theme.

Next up, creating the foundation.
