<p align="center">
  <div align="center">
    <a href=""
      ><img
        src="https://img.shields.io/badge/platforms-Android%20%7C%20iOS%20%7C%20MacOs%20%7C%20Windows-brightgreen.svg?colorB=191A17"
        alt="platforms"
    /></a>
    <a href="https://github.com/expo/expo"
      ><img
        src="https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&amp;logo=EXPO&amp;labelColor=ffffff&amp;logoColor=000"
        alt="runs with expo"
    /></a>
  </div>
  <div align="center">
    <a href="https://www.npmjs.com/package/@tristanheilman/react-native-render-html"
      ><img
        src="https://img.shields.io/npm/v/@tristanheilman/react-native-render-html/latest"
        alt="npm"
    /></a>
    <a href="https://www.npmjs.com/package/@tristanheilman/react-native-render-html"
      ><img
        src="https://img.shields.io/npm/v/@tristanheilman/react-native-render-html/next"
        alt="npm"
    /></a>
    <a href="https://www.npmjs.com/package/@tristanheilman/react-native-render-html"
      ><img
        src="https://img.shields.io/npm/dm/@tristanheilman/react-native-render-html.svg?colorB=007ec6"
        alt="npm"
    /></a>
  </div>
  <div align="center">
    <a href="https://codecov.io/gh/tristanheilman/react-native-render-html"
      ><img
        src="https://img.shields.io/codecov/c/gh/tristanheilman/react-native-render-html"
        alt=""
    /></a>
    <a
      href="https://github.com/tristanheilman/react-native-render-html/actions?query=branch%3Amaster+workflow%3ACI"
      ><img
        src="https://github.com/tristanheilman/react-native-render-html/workflows/CI/badge.svg?branch=master"
        alt=""
    /></a>
    <a href="https://github.com/tristanheilman/react-native-render-html/issues"
      ><img
        src="https://img.shields.io/github/issues/tristanheilman/react-native-render-html.svg"
        alt="github issues"
    /></a>
    <a href="https://semver.org/spec/v2.0.0.html"
      ><img src="https://img.shields.io/badge/semver-2.0.0-e10079.svg" alt=""
    /></a>
  </div>
  <div align="center">
    <a href="https://discord.gg/dbEMMJM"
      ><img
        src="https://img.shields.io/discord/736906960041148476?label=discord"
        alt=""
    /></a>
    <a
      href="https://openbase.com/js/@tristanheilman/react-native-render-html?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge"
      ><img
        src="https://badges.openbase.com/js/rating/@tristanheilman/react-native-render-html.svg"
        alt="Rate on Openbase"
    /></a>
  </div>
</p>
<br/>
<p align="center">
    <a href="https://github.com/tristanheilman/react-native-render-html"><img width="124" height="124" src="https://github.com/tristanheilman/react-native-render-html/raw/master/assets/logo.svg"></a>
</p>

> **📝 Credits:** This is a maintained fork of [react-native-render-html](https://github.com/meliorence/react-native-render-html) by [Meliorence](https://github.com/meliorence). All credit goes to the original authors for their excellent work. The contents of this fork compared to the parent have been significantly slimmed down; only the render-html package is included in this repository.


<h1 align="center">react-native-render-html</h1>
<p align="center">
  <sup>Based on the original work of <a href="https://github.com/Thomas101">Thomas Beverley</a>, props to him.</sup>
</p>
<p align="center">
An iOS/Android pure javascript react-native component that renders your HTML into 100% native views.
</p>
<p align="center">
    <a href="https://github.com/tristanheilman/react-native-render-html"><img width="320" height="744" src="https://github.com/tristanheilman/react-native-render-html/raw/master/assets/demo.gif"></a>
</p>

### 🗃️ Releases

**The Foundry (v6) release is finally stable, and is now-on the recommended
version.** This is a maintained fork of the original library.
For migration from v5 and below, please refer to the original documentation.

> :warning: **You are on the master branch which is home for the latest development.**
> Check the table bellow to get documentation for your exact
> version.

| Minor | Branch                                                                                   | Documentation                                                                                              | Latest                                                                         |
| ----- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| next  | master                                                                                   | -                                                                                                          | [![npm](https://img.shields.io/npm/v/@tristanheilman/react-native-render-html/next)](#)        |
| 6.3   | [release/6.3](https://github.com/tristanheilman/react-native-render-html/tree/release/6.3)   | [GitHub Repository](https://meliorence.github.io/react-native-render-html/)                                 | [![npm](https://img.shields.io/npm/v/@tristanheilman/react-native-render-html/release/6.3)](#) |
| 5.1   | [release/5.1](https://github.com/tristanheilman/react-native-render-html/tree/release/5.1)   | [release/5.1/README.md](https://github.com/tristanheilman/react-native-render-html/blob/release/5.1/README.md) | [![npm](https://img.shields.io/npm/v/@tristanheilman/react-native-render-html/release/5.1)](#) |
| 4.2   | [release/4.2](https://github.com/tristanheilman/react-native-render-html/tree/release/4.2)   | [release/4.2/README.md](https://github.com/tristanheilman/react-native-render-html/blob/release/4.2/README.md) | [![npm](https://img.shields.io/npm/v/@tristanheilman/react-native-render-html/release/4.2)](#) |

<a name="prereleases"></a>

## :computer: Install

```bash
npm install @tristanheilman/react-native-render-html
```

```bash
yarn add @tristanheilman/react-native-render-html
```

## :speedboat: Basic Usage

```jsx
import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from '@tristanheilman/react-native-render-html';

const source = {
  html: `
<p style='text-align:center;'>
  Hello World!
</p>`
};

export default function App() {
  const { width } = useWindowDimensions();
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
    />
  );
}
```

## :blue_book: Documentation

See our [GitHub repository](https://github.com/tristanheilman/react-native-render-html) for documentation and examples.

## :iphone: Example

You like to learn by example? Check out the examples in our [GitHub repository](https://github.com/tristanheilman/react-native-render-html).

## :notebook: Changelog

The changelog is available here: [CHANGELOG.md](./CHANGELOG.md).

## :bulb: Help

Please refer to [our dedicated document](./HELP.adoc).

## 👥 Community

You're always welcome to join our [discord channel](https://discord.gg/dbEMMJM) :-).

## :pencil: Contributing

Check-out our [contributing guide](./CONTRIBUTING.adoc).

- You can report bugs in [our Issue Tracker](https://github.com/tristanheilman/react-native-render-html/issues);
- We handle Feature Requests [in our Canny board](https://native-html.canny.io/features).

## :blue_heart: Sponsorship

Want to support this project or hire us to implement a feature? [Check out this page](https://github.com/sponsors/jsamr).

## :balance_scale: License

The source code is licensed under BSD 2-Clause "Simplified" License.
