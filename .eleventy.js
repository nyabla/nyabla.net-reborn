module.exports = function(eleventyConfig) {
    // Output directory: _site

    // copy `static/` to `_site/`
    eleventyConfig.addPassthroughCopy({ "src/static": "/" })

    // date shortcode
    eleventyConfig.addShortcode("date", (date) => {
        const formatted = date.toISOString().slice(0, 10)
        const content = `<time datetime="${formatted}">${formatted}</time>`
        return content
    })

    // input folder `src/`
    return {
        dir: {
            input: "src",
        },
    }
}
