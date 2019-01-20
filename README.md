# Using the CSS <code>content</code> prop with JSS

This may seem obvious but I got tripped-up by it. So here is a quick example just to drill it into my memory.

I was making rows of squares using <code>::after</code> & the css <code>content</code> prop, but things did work out. I wrote code like this:

```js
const styles = {
  box: {
    ...
    '&::after': {
      content=''
      ...
    }
  }
}
```

However, things were not working and debugging showed **invalid property** for <code>content</code>. The cure is:
```js
const styles = {
  box: {
    ...
    '&::after': {
      content='""'
      ...
    }
  }
}
```