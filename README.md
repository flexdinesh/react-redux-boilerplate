<img src="https://raw.githubusercontent.com/flexdinesh/react-redux-boilerplate/master/app/components/Header/images/banner.jpg" alt="react redux boilerplate banner" align="center" />

<br />

<div align="center">A minimal, beginner friendly React-Redux boilerplate with all the industry best practices</div>

<br />

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/flexdinesh/react-redux-boilerplate">
    <img src="https://david-dm.org/flexdinesh/react-redux-boilerplate.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/flexdinesh/react-redux-boilerplate#info=devDependencies">
    <img src="https://david-dm.org/flexdinesh/react-redux-boilerplate/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/flexdinesh/react-redux-boilerplate">
    <img src="https://travis-ci.org/flexdinesh/react-redux-boilerplate.svg" alt="Build Status" />
  </a>
  <!-- Gitter -->
  <a href="https://gitter.im/flexdinesh/react-redux-boilerplate">
    <img src="https://camo.githubusercontent.com/54dc79dc7da6b76b17bc8013342da9b4266d993c/68747470733a2f2f6261646765732e6769747465722e696d2f6d78737462722f72656163742d626f696c6572706c6174652e737667" alt="Gitter Chat" />
  </a>
</div>

<br />

<div align="center">
  <sub>Created by <a href="https://twitter.com/flexdinesh">Dinesh Pandiyan</a></sub>
</div>


## Why? [![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat)](http://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action)

The whole React community knows and will unanimously agree that [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) is the ultimate starter template for kickstarting a React project. It's setup with all the industry best practices and standards. But it also has a lot more than what you just need to start a react-redux app. It took me quite some time to get my head around what was happening in the codebase and it's clearly not for starters. They quote this right in their readme,

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

So it involves a lot of additional learning curve to get started with [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate). That's why I forked it, stripped it down and made this _leaner, **beginner friendly**_ boilerplate without all the additional complexity.


## Features

This boilerplate features all the latest tools and practices in the industry.

- _React.js_ - **React 16**✨, React Router 5
- _Redux.js_ - Redux saga, Redux immutable and Reselect
- _Babel_ - ES6, ESNext, Airbnb and React/Recommended config
- _Webpack_ - **Webpack 4**✨, Hot Reloading, Code Splitting, Optimized Prod Build and more
- _Test_ - Jest with Enzyme
- _Lint_ - ESlint
- _Styles_ - SCSS Styling

Here are a few highlights to look out for in this boilerplate 

<dl>
  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more, today.</dd>

  <dt>Component Specific Styles</dt>
  <dd>Separate styles for each component. Style in the good old scss way but still keep it abstracted for each component.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

But wait... there's more!

  - *The best test setup:* Automatically guarantee code quality and non-breaking
    changes. (Seen a react app with 99% test coverage before?)
  - *The fastest fonts:* Say goodbye to vacant text.
  - *Stay fast*: Profile your app's performance from the comfort of your command
    line!
  - *Catch problems:* TravisCI setup included by default, so your
    tests get run automatically on each code push.


## Quick start

1. Clone this repo using `git clone https://github.com/flexdinesh/react-redux-boilerplate.git`
2. Move to the appropriate directory: `cd react-redux-boilerplate`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `npm start` to see the example app at `http://localhost:3000`.

Now you're ready build your beautiful React Application!


## Info

These are the things I stripped out from [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate) - _github project rules, ngrok tunneling, shjs, service worker, webpack dll plugin, i18n, styled-components, code generators and a few more._


## License

MIT license, Copyright (c) 2018 Dinesh Pandiyan.
