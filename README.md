# Themely
Themely contains a tiny set of Javascript functions that enable quick theming of your web applications. Themely's source is far from rocket science, but the patterns that go along with it provide a clean, easy to modify, runtime-swappable set of variables you can use in your stylesheets to provide the core design information (colors, sizes, fonts, etc) to the rest of your app.

## Installation

Themely is available as a node package. For the latest stable version, run:

```
npm install themely-io
```

## Usage

Create a css class for each theme you want to support. Use css vars to define your values:

```css
.darkMode {
	--backgroundColor: black;
	--foregroundColor: white;
}

.lightMode {
	--backgroundColor: white;
	--foregroundColor: black;
}
```

Create top-level css variables that reference these theme variables. Example using Stylus (saved as theme.styl):

```html
.theme = {
	colors: {
		background: var(--backgroundColor);
		foreground: var(--foregroundColor);
	}
}
```

If using Vue, optionally add an automatic import of your css via a vue.config.js file in the root of your project:

```js
module.exports = {
	css: {
		loaderOptions: {
			stylus: {
				import: [
					'~@/theme.styl',
				],
			},
		},
	},
};
```

Import Themely:

```js
import Themely from 'themely-io';
```

Initialize and configure a new Themer instance, passing an array of the themes you wish to support, along with the theme to initially apply:

```js
const themely = new Themely(["lightMode", "darkMode"], "lightMode");
```

Get the current applied theme from your Themer:
```js
const  currentTheme = themely.currentTheme();
console.log(currentTheme); // lightMode
```

Switch the current theme (takes affect immediately):

```js
themely.setCurrentTheme("darkMode");
console.log(themer.currentTheme()); // darkMode
```

Use the theme values in your style tags:

```html
<style lang="stylus">
	div {
		background-color: theme.colors.background;
		color: theme.colors.foreground;
	}
</style>
```
