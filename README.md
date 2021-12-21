# Clientside Tabs Challenge.

Implementation of this [challenge](https://github.com/guardian/clientside-tabs-challenge) in React.

The code is pretty minimal and hopefully is self-explanatory.

## Considerations

### Accesibility

I tried to add correct aria attributes to the tabs elements. It not perfect, but at least it can be properly controlled with a keyboard.

### Reusability

The tabs components should be usable for other use cases, not only to show the articles.

## Ways to improve

Thing I would consider improving if I had more time.

1. Remove the need to add _index_ attributes to the tab buttons and panels. Meka it so they're calculated automatically based on the order.
1. Right now the articles data is fetched every time the panel is activated. Probably should cache the data (using react-query or smt.). And then add way to update the cache.
1. Remove the flickering on tabs change.
1. Figure out the 100% correct way to use ARIA attributes.
1. Specify the browsers we want to support using _browserslist_.
