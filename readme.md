## [React.js](https://github.com/facebook/react) + [Reactive Component](https://github.com/PixelsCommander/ReactiveElements/) + [Webpack](http://webpack.github.io/docs/) / [ES6](https://6to5.org/)

This repo is an example of using ES6 modules to load a web component build with React.js. Everything is glued / bundled together with webpack.

**_I'm obsessed with the web-component utopia!_**

<blockquote class="twitter-tweet" lang="en"><p>There is something really sweet about having <a href="https://twitter.com/hashtag/webcomponents?src=hash">#webcomponents</a> as a pure <a href="https://twitter.com/hashtag/javascript?src=hash">#javascript</a> written with <a href="https://twitter.com/hashtag/es6?src=hash">#es6</a> imports and dependancies.</p>&mdash; Thomas Reggi (@thomasreggi) <a href="https://twitter.com/thomasreggi/status/561434558227562496">January 31, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I built a component with [Riot.js](https://muut.com/riotjs/) (react clone) that was a simple countdown timer from a specific date using [Moment](http://momentjs.com/) [riotjs-countdown](https://github.com/reggi/riotjs-countdown). Having messed around with react before I thought I'd make the same component with react using ReactiveElements.

ReactiveElements is a way for you to take React code and turn it into a HTML5 Custom Element. 

This is all heavily inspired by this blog post by [Addy Osmani on web-component library interoperability](http://addyosmani.com/blog/component-interop-with-react-and-custom-elements/).

The problem with this repo is outlined in this issue here [PixelsCommander/ReactiveElements#16](https://github.com/PixelsCommander/ReactiveElements/issues/16). I used this [react timer](https://github.com/uken/react-countdown-timer) and ideally. I would be able to just make it a web component with reactive components but I can't. 

I can't used the native version of [PixelsCommander/ReactiveElements](https://github.com/PixelsCommander/ReactiveElements/issues) because it doesn't support any module system and just assumes that the `React` global is set. [Webpack](http://webpack.github.io/) is also the only module-loader I could get to easily ignore defining `window.document` with es6, I tried [SystemJs](https://github.com/systemjs/systemjs) and [Browserify](http://browserify.org/). 
