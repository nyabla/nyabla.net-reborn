module.exports = function(eleventyConfig) {
    // Output directory: _site

    // copy `static/` to `_site/`
    eleventyConfig.addPassthroughCopy({ "src/static": "/" })

    // input folder `src/`
    return {
        dir: {
            input: "src",
        },
    }
}
