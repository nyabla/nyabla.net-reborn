const DateGitFirstAdded = require("../../../util/DateGitFirstAdded")

module.exports = {
    eleventyComputed: {
        dateCreated: data => {
            return DateGitFirstAdded(data.page.inputPath)
        }
    }
}