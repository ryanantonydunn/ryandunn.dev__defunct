---
author: "Ryan Dunn"
date: "2020-07-04T23:00:00.000Z"
title: "How to use Tailwind with Create React App and PostCSS with no hassle"
description: "I really like styled components and CSS in JS in general, but this has quickly overtaken as my favourite way to do styling in React."
slug: "how-to-use-tailwind-with-create-react-app-and-postcss-with-no-hassle"
---

I really like styled components and CSS in JS in general, but this has quickly overtaken as my favourite way to do styling in React. It took a little while to figure out the configuration so I'm going to share that here.

[Link if you just want to see the working starter](https://github.com/ryanantonydunn/cra-postcss-tailwind)

The combination that works to make this seamless is as follows:

- [Create React App](https://create-react-app.dev/docs/getting-started/)
- [TailwindCSS](https://tailwindcss.com/)
- [postcss-nested](https://github.com/postcss/postcss-nested)
  Use SASS style nested CSS rules.
- [craco (Create-React-App-Configuration-Override)](https://www.npmjs.com/package/@craco/craco)
  Allow us to use PostCSS to compile tailwind and the other plugins with webpack without the need for ejecting.

## Getting set up

Using [Create React App](https://create-react-app.dev/docs/getting-started/) is very well documented. We'll start a new project and install our dev dependencies.

```bash
npx create-react-app cra-postcss-tailwind
cd cra-postcss-tailwind
yarn add -D @craco/craco autoprefixer postcss-nested tailwindcss
```

## Setting up the basic webpack config

To allow us to customise the Create React App webpack config we'll be using Craco.

Create a `tailwind.config.js` file in the root of the project for whatever customisations you like. This is also where we set up the production purge to get rid of unused utilities and keep file size down.

```javascript
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        xs: { max: "400px" },
      },
    },
  },
};
```

And create a `craco.config.js` file to set up the postcss plugins:

```javascript
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss")("./tailwind.config.js")],
    },
  },
};
```

Now let's change the scripts inside `package.json` to use `craco` instead of `react-scripts`. This is what allows us to bypass the restrictions with Create React App without ejecting.

```javascript
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
},
```

Finally, let's set up the global stylesheet. Adding to the start of `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

That's it for the basics, you should now be able to use tailwind in your markup with all the benefits of CRA with impunity. Let's run the project with `yarn start` and add a utility class to test it out:

![Setting up Tailwind CSS with Create React App](https://dev-to-uploads.s3.amazonaws.com/i/o5r76xikq8u0y1g17a7m.png)

Nice.

## Composition and modules

This setup comes with all the benefits of a normal CRA + PostCSS setup, which means we can compose classes inside CSS modules alongside regular CSS like this:

```css
/* App.css */
.App {
  width: 100vw;
  height: 100vh;
  @apply bg-green-500;
}
```

And with the inclusion of the `postcss-nested` plugin we can have SASS style nesting as well:

```javascript
// craco.config.js
require("tailwindcss")("./tailwind.config.js"),
require("postcss-nested"),
```

```css
/* App.css */
.App {
  width: 100vw;
  height: 100vh;
  @apply bg-green-500 flex items-center justify-center;

  &-inner {
    @apply bg-gray-900 text-white p-4;
  }
}
```

```jsx
// App.js
return (
  <div className="App">
    <div className="App-inner border border-white">Success!</div>
  </div>
);
```

Resulting in this:

![Setting up Tailwind CSS with Create React App and nesting](https://dev-to-uploads.s3.amazonaws.com/i/hxfwi50me7wxpqgjfv9p.png)

And that's it. This is definitely my new favourite way to do styling in React.
