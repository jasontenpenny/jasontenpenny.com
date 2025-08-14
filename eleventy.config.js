import { InputPathToUrlTransformPlugin, IdAttributePlugin } from "@11ty/eleventy";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";
import markdownItAttrs from "markdown-it-attrs";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownItFootnote from "markdown-it-footnote";

export default function(eleventyConfig) {

    // sets the default layout
    eleventyConfig.addGlobalData('layout', 'page.html');

    // enables passthrough files in the following directories
    eleventyConfig.addPassthroughCopy("assets");

    // allows for rewriting relative links
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

    // enables IdAttributePlugin to hyperlink headings
    eleventyConfig.addPlugin(IdAttributePlugin);


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
}

export const config = {
    dir: {
        // these are both relative to your input directory!
        includes: "_includes",
        layouts: "_layouts"
    }
}