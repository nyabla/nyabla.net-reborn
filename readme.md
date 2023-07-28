# nyabla.net reborn

new superior nyabla.net dropped. plain html. plain css. a little bit quirky.

MIAU!

## blog

### adding a summary

add a `summary` in the yaml frontmatter

### adding content warnings

add a list under the `content_warnings` key in the yaml frontmatter. each item in the list should be a dictionary with a mandatory `brief` key and an optional `explanation` key.

example:
```yaml
content_warnings: [
    {
        brief: "thing 1"
    },
    {
        brief: "thing 2",
        explanation: "this thing happens in this context"
    }
]
```
