import { InputPathToUrlTransformPlugin, IdAttributePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import rssPlugin from "@11ty/eleventy-plugin-rss";
import dirOutputPlugin from "@11ty/eleventy-plugin-directory-output";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import markdownItAttrs from "markdown-it-attrs";
import markdownItFootnote from "markdown-it-footnote";
import { DateTime } from "luxon";
import standardSitePlugin from "eleventy-plugin-standard-site";

export default function(eleventyConfig) {

    // hides default output and enables output plugin for organization by folder
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPlugin(dirOutputPlugin, {
        // adds yellow highlight if file size exceeds this many bytes
        warningFileSize: 400 * 1000,
    });

    // sets the default layout
    eleventyConfig.addGlobalData('layout', 'post.html');

    // enables passthrough files in the following directories
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("robots.txt");

    // enables parsing of a post excerpt
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_alias: "excerpt",
        excerpt_separator: "<!-- more -->"
    });

    // allows for rewriting relative links
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

    // enables RSS creation
    eleventyConfig.addPlugin(rssPlugin);

    // enables IdAttributePlugin to hyperlink headings
    eleventyConfig.addPlugin(IdAttributePlugin);

    // add formatting filters
    eleventyConfig.addFilter("postDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("DDD");
    });
    eleventyConfig.addFilter("hoverDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("DDD 'at' t 'UTC'");
    });
    eleventyConfig.addFilter("year", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat('yyyy');
    });
    eleventyConfig.addFilter("isoDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toISO({ precision: 'second' });
    });
    eleventyConfig.addFilter("filterByCategory", function (collection = [], cat="") {
        return collection.filter(page => page.data.category?.includes(cat));
    });


    // make tweaks to markdown processing
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs, {
        leftDelimiter: '{:',
        rightDelimiter: '}'
    }));
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItTaskCheckbox));
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItFootnote));

    eleventyConfig.addPlugin(syntaxHighlight, {
        preAttributes: {
            "data-language": function(context) {
                return context.language;
            }
        },
        codeAttributes: {
            "data-language": function(context) {
                return context.language;
            }
        }
    });

    // custom collections
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("posts/*.md");
    });
    eleventyConfig.addCollection("categories", collection => {
        const gatheredCats = [];
        collection.getAll().forEach(item => {
            if (item.data.category) {
                if (typeof item.data.category === 'string') {
                    gatheredCats.push(item.data.category);
                } else {
                    item.data.category.forEach(cat => gatheredCats.push(cat));
                }
            }
        });
        return [ ... new Set(gatheredCats)];
    });
    eleventyConfig.addCollection("tags", collection => {
        const gatheredTags = [];
        collection.getAll().forEach(item => {
            if (item.data.tags) {
                if (item.data.tags === 'string') {
                    gatheredTags.push(item.data.category);
                } else {
                    item.data.tags.forEach(tag => gatheredTags.push(tag));
                }
            }
        });
        return [ ... new Set(gatheredTags)];
    });

    // adds shortcodes
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // configure standard site plugin
    eleventyConfig.addPlugin(standardSitePlugin, {
        publicationName: "Jason Tenpenny's Blog",
        publicationUrl: "https://jasontenpenny.com",
        identifier: "did:plc:so3xt2f546bwafa3qhjzr3ph",
        password: "d7xr-n7io-7edh-qz6f",
        publicationDescription: "A blog where I write about technology and other things that happen to interest me",
        // Optional: whether to automatically extract text content from posts
        // and include in their document records, defaults to true
        includeTextContent: true,
        // Optional: whether the publication should appear in discovery feeds, defaults to true
        showInDiscover: true,
        // Optional: PDS URL, defaults to "https://bsky.social"
        pds: "https://pds.jasontenpenny.com",
        // Optional: path to an icon image file to be used in the publication record
        publicationIconPath: "assets/favicon/web-app-manifest-512x512.png",
    });
}

export const config = {
    dir: {
        // these are both relative to your input directory!
        includes: "_includes",
        layouts: "_layouts"
    }
}