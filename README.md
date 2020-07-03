# [NodeJS] Advanced Determine

[`hugoalh/NodeJS.AdvancedDetermine`](https://github.com/hugoalh/NodeJS.AdvancedDetermine)

[![](https://img.shields.io/github/contributors/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)](https://github.com/hugoalh/NodeJS.AdvancedDetermine/graphs/contributors)
[![](https://img.shields.io/github/license/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)](https://github.com/hugoalh/NodeJS.AdvancedDetermine/blob/master/LICENSE.md)
![](https://img.shields.io/github/languages/count/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)
![](https://img.shields.io/github/languages/top/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)
![](https://img.shields.io/github/repo-size/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)
![](https://img.shields.io/github/languages/code-size/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)
![](https://img.shields.io/github/watchers/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)
![](https://img.shields.io/github/stars/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)
![](https://img.shields.io/github/forks/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&logo=github)
[![](https://img.shields.io/lgtm/alerts/g/hugoalh/NodeJS.AdvancedDetermine.svg?style=flat-square&logo=lgtm&label=%20)](https://lgtm.com/projects/g/hugoalh/NodeJS.AdvancedDetermine/alerts)
[![](https://img.shields.io/lgtm/grade/javascript/g/hugoalh/NodeJS.AdvancedDetermine.svg?style=flat-square&logo=lgtm)](https://lgtm.com/projects/g/hugoalh/NodeJS.AdvancedDetermine/context:javascript)

| **[Release](https://github.com/hugoalh/NodeJS.AdvancedDetermine/releases)** ![](https://img.shields.io/github/downloads/hugoalh/NodeJS.AdvancedDetermine/total?style=flat-square&color=000000&label=%20) | **Outside Download**  | **[Issue](https://github.com/hugoalh/NodeJS.AdvancedDetermine/issues?q=is%3Aissue)** | **[Pull Request](https://github.com/hugoalh/NodeJS.AdvancedDetermine/pulls?q=is%3Apr)** |
|:----|:----|:----|:----|
| **Stable:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.AdvancedDetermine?sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20))<br />**Latest:** ![](https://img.shields.io/github/release/hugoalh/NodeJS.AdvancedDetermine?include_prereleases&sort=semver&style=flat-square&color=000000&label=%20) (![](https://img.shields.io/github/release-date-pre/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20)) | [NPMJS](https://www.npmjs.com/package/@hugoalh/advanced-determine) | **Open:** ![](https://img.shields.io/github/issues-raw/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-closed-raw/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20) | **Open:** ![](https://img.shields.io/github/issues-pr-raw/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20)<br />**Closed:** ![](https://img.shields.io/github/issues-pr-closed-raw/hugoalh/NodeJS.AdvancedDetermine?style=flat-square&color=000000&label=%20) |

## 📜 Description

A library to provide a better and more accuracy way to determine item's type.

## 💽 Installation

- NodeJS 8+
- NPMJS 6+
  ```powershell
  > npm install @hugoalh/advanced-determine
  ```

## ✍ Guide

### API

|  | **Description** |
|:----|:----|
| - `allIs(type, ...items)`<br />- `allIs(option, ...items)` | **type {string.lowerCase}:** Type to determine (e.g.: `"regexp"`, `"stringifyjson"`). Type's alias cannot use in here!<br />**option {array[string.lowerCase, ...\*]}:** Type to determine with determiner option(s) (e.g.: `["string", true]`). Type's alias cannot use in here!<br />**...items {\*}:** Support infinity arguments.<br /><br />Return `true` when items are all meet the `true` determine requirement; Return `false` otherwise. |
| `isNull(item, fuzzyMode?)`<br />*(**Alias:** `isNul`)* | ***fuzzyMode {boolean = false}:*** Enable fuzzy mode.<br /><br />Return `true` when item is `null`, `""`, `[]`, `{}`, or `"null"` (fuzzy mode only); Return `false` otherwise. |
| `isArray(item)`<br />*(**Alias:** `isArr`)* | Return `true` when item is array and has length (i.e.: > 0); Return `null` when item is array but no length (i.e.: = 0); Return `false` otherwise. |
| `isBuffer(item)`<br />*(**Alias:** `isBuf`)* | Check if the item is instance of buffer. |
| `isDate(item)` | Check if the item is instance of date. |
| `isJSON(item)` | Return `true` when item is JSON and has length (i.e.: > 0); Return `null` when item is JSON but no length (i.e.: = 0); Return `false` otherwise. |
| `isNumber(item)`<br />*(**Alias:** `isNum`)* | Return `false` when item is type of bigint, or `NaN`. |
| `isNumberFloat(item)` |  |
| `isNumberNegative(item)` |  |
| `isNumberNegativeFloat(item)` |  |
| `isNumberNegativeInteger(item)` |  |
| `isNumberNegativeSafeFloat(item)` |  |
| `isNumberNegativeSafeInteger(item)` |  |
| `isNumberPositive(item)` |  |
| `isNumberPositiveFloat(item)` |  |
| `isNumberPositiveInteger(item)` |  |
| `isNumberPositiveSafeFloat(item)` |  |
| `isNumberPositiveSafeInteger(item)` |  |
| `isNumberSafeFloat(item)` |  |
| `isRegularExpression(item)`<br />*(**Alias:** `isRegEx`, `isRegExp`, `isRegExr`)* | Check if the item is instance of regular expression. |
| `isString(item, fuzzyMode?)`<br />*(**Alias:** `isStr`)* | ***fuzzyMode {boolean = false}:*** Enable fuzzy mode.<br /><br />Return `true` when item is string and has length (i.e.: > 0); Return `null` when item is string but no length (i.e.: = 0), or item is `"null"` (fuzzy mode only); Return `false` otherwise. |
| `isStringLowerCase(item)` | Check if the string is all lowercase. |
| `isStringUpperCase(item)` | Check if the string is all uppercase. |
| `isStringASCII(item)` | Check if the string is all ASCII. |
| `isStringifyJSON(item)` | Return `true` when item is stringify JSON and has length (i.e.: > 0); Return `null` when item is stringify JSON but no length (i.e.: = 0); Return `false` otherwise. |
| `isUndefined(item, fuzzyMode?)`<br />*(**Alias:** `isUdf`)* | ***fuzzyMode {boolean = false}:*** Enable fuzzy mode.<br /><br />Return `true` when item is `undefined`, or `"undefined"` (fuzzy mode only); Return `false` otherwise. |

### Example

```javascript
const advancedDetermine = require("@hugoalh/advanced-determine");

console.log(advancedDetermine.version);// 1.2.1

console.log(advancedDetermine.isString(""));// null
console.log(advancedDetermine.isString("", false));// null
console.log(advancedDetermine.isString("null", false));// true
console.log(advancedDetermine.isString("null", true));// null
console.log(advancedDetermine.isNull(""));// true
console.log(advancedDetermine.isArray([]));// null
console.log(advancedDetermine.allIs("null", "", [], {}));// true
console.log(advancedDetermine.allIs("string", "Hello, world!", 10, [8, 31]));// false
console.log(advancedDetermine.isStringLowerCase("Test word."));// false
console.log(advancedDetermine.isStringLowerCase("word"));// true
console.log(advancedDetermine.isStringUpperCase("NO"));// true
console.log(advancedDetermine.isNumberFloat(-8.31));// true
console.log(advancedDetermine.isNumberFloat(51));// false
```
