const DateGitFirstAdded = require("./util/DateGitFirstAdded")

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

    // iso date shortcode
    eleventyConfig.addShortcode("iso_date", (date) => {
        return date.toISOString()
    })

    // get page creation date filter
    eleventyConfig.addFilter("git_created", (page) => {
        console.log(page.inputPath)
        return DateGitFirstAdded(page.inputPath)
    })

    eleventyConfig.addLiquidFilter("date_equals", (dateA, dateB) => {
        return dateA.getTime() == dateB.getTime()
    })

    // collection for posts
    eleventyConfig.addCollection('posts', (collectionApi) => {
        return collectionApi.getFilteredByGlob("**/blog/_posts/*.md")
    })

    // input folder `src/`
    return {
        dir: {
            input: "src",
        },
    }
}
