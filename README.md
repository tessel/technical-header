# Technical-header. A responsive header for Technical Humans.
![Header Screen Shot](https://cloud.githubusercontent.com/assets/5528612/6471543/b4fe1b0c-c1a0-11e4-8757-8a4a5ef52366.png)


 - bower
 - jade
 - scss/sass

## Dependencies
Source Sans Pro
```html
<link href='//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,900,400italic', rel='stylesheet', type='text/css'>
```
**foundation by zurb** you'll need this in you scss compiling path.

## Use
To use the header install it as a bower dependency in you application
I chose to use bower as I've based most of my principles and base off of inuit.css which uses bower for dependency management.

Once install be sure to include this file in your `main.scss` or `index.scss` file.

```
// Components
@import "bower_components/technical-header/components.technical-header";

```

Don't forget to set the font path to your fonts directory. Be sure to move the fonts from the font-awesome bower install to your fonts directory. Preferably in your `_variable.scss` file.

```
@fa-font-path: /path/to/font-directory
```

In your layout.jade file include the `technical-header.jade`:

```
include /path/to/technical-header.jade
```

Be sure your scss files these conventions:
[http://www.evoluted.net/thinktank/web-development/inuit-css-v5-0-the-object-oriented-css-framework]()

### Import order

Because inuitcss is broken apart into lots of small, composable modules, it is
important that you as the developer piece things together in the correct order.
That order is:

* **Settings:** Global variables, site-wide settings, config switches, etc.
* **Tools:** Site-wide mixins and functions.
* **Generic:** Low-specificity, far-reaching rulesets (e.g. resets).
* **Base:** Unclassed HTML elements (e.g. `a {}`, `blockquote {}`, `address {}`).
* **Objects:** Objects, abstractions, and design patterns (e.g. `.media {}`).
* **Components:** Discrete, complete chunks of UI (e.g. `.carousel {}`). This is the one layer that inuitcss doesn’t get involved with.
* **Trumps:** High-specificity, very explicit selectors. Overrides and helper
  classes (e.g. `.hidden {}`).

## Development
Install the dependancies

```
npm install;
bower install;
```

To develop with this component simply run `gulp` and make edits to the `lib/test.html` `lib/test.scss`

To publish simply commit changes with appropriate version tags and and publish to the bower registry.
