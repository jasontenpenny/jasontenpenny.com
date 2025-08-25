import { InputPathToUrlTransformPlugin, IdAttributePlugin } from "@11ty/eleventy";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import markdownItAttrs from "markdown-it-attrs";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownItFootnote from "markdown-it-footnote";
import { DateTime } from "luxon";
import feedPlugin from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {

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
    eleventyConfig.addPlugin(feedPlugin);

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
}

export const config = {
    dir: {
        // these are both relative to your input directory!
        includes: "_includes",
        layouts: "_layouts"
    }
}