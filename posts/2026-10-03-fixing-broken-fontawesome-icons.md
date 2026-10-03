---
title: Fixing Broken FontAwesome Icons
date: 2026-10-03 14:20:00 -5
category: Web Development
tags: [web development, static website, 11ty, FontAwesome]
excerpt: I recently had an issue with some of the FontAwesome icons not displaying properly on my site, and this is a write-up of how I fixed it.
---

I wanted to write up a post on how I fixed an issue with my FontAwesome icons. I recently noticed a problem that had sprung up on my site, where some of the icons from FontAwesome weren't displaying properly. Instead of being the proper icon, they were showing as <i class="fa-solid fa-angle-right" style="font-weight: 400;"></i>. The weird part was that only some of the icons were affected. Specifically the arrows for the Blog menu, and then some other ones that I haven't actually used, but are configured on a hidden page where I test typography settings. But at the same time that those few were not working, other icons, like the ones in the blog post metadata section and the social icons on my homepage, were all displaying just fine!

It was a strange problem, and it took me a while to diagnose it. For one thing, it only seemed to be affecting ones I was specifying in my CSS stylesheet as opposed to ones inserted as an `<i>` element. I tried a few different things, one of which was to sign up for a actual FontAwesome Kit and deploy that on my site instead of a generic CDN link I had found somewhere. That didn't resolve the issue, though.

After poking at it for quite a while and doing various searches on the web for other people having similar issues, I finally figured out the resolution. With the free version of the fonts, I only have access to a specific font-weight, specifically 900. Other font-weights are detected as Pro fonts, and are replaced with the X symbol because I haven't paid for the Pro fonts. So once I figured this out, the fix was super simple, I just needed to add a `font-weight` override on the specific element.

So as an example, here's the adjusted styling for the blog menu arrow, with `font-weight` specified:

```css
li:has(menu)::after {
    content: ' \f105';
    color: var(--text-secondary);
    font-size: small;
    font-weight: 900;
    font-family: var(--icon-font);
}
```

Hope this helps someone find the resolution faster than I found it!
