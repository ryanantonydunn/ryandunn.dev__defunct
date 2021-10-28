---
author: "Ryan Dunn"
date: "2020-05-06T23:00:00.000Z"
title: "Formatting numerically using regex"
description: "Doing perfect numerical validation using a single regex."
slug: "in-search-of-the-ultimate-number-regex"
readTime: "4 min read"
---

I was recently working on a number input field and ran into the age old problem of validating the user input to ensure a valid numerical value. This is simple enough to just validate once the complete value is inputted, but not so much while the user is still typing.

We need the user to be able to input a `-` on the way to typing `-1` and to be able to type `1.` on the way to typing `1.23`, but remove any non-numerical characters smoothly. I was sure this could be accomplished with a single regex and set out to do it.

## Requirements

1. Remove any characters that are not numerals, dots or dashes
2. Remove any dashes not at the beginning of the string
3. Allow one dot, remove any additional dots

This should also result, at least in Javascript with a value that can almost always be correctly formatted with `parseFloat` without any `NaN` hijinks.

## Filtering non-numeric characters

Let's go ahead and try to format this horrible mess into a valid potential numeric value:

```javascript
const n = "-a[b1-2.cd.-e34--.5*(a67.ac&";
```

The first part of the problem is simple, filter any characters that aren't numbers, dashes or dots:

```javascript
n.replace(/[^\d.-]/g, ""); // output "-1-2..-34--.567."
```

This looks mysterious if you haven't ever broken it down into pieces before, but I'll explain it bit by bit. We tell our match filter to find every match `/g` from a whitelist group `[ ]` that is not `^` a digit `\d`, a dot `.`, or a dash `-`. We use `replace` to replace all matches with nothing.

Note: normally the dot character would need escaping (`/\./g` matches all dots) but doesn't within the group.

## Removing improper dashes

Next we need to remove any dashes that aren't at the beginning of the string. This is a little more esoteric:

```javascript
n.replace(/(?!^)-|[^\d.-]/g, ""); // output "-12..34.567."
```

Here we're using a negative lookahead `(?! )` to tell our matcher to fail if it finds the following match at the first-character position `^` and then to match all dashes `-`, ie: all dashes that are not the first character. Then we are using the or operator `|` to tell it to search for that or anything from out previous matcher - anything non digit, dot or dash. Getting closer.

## Removing additional dots

The final problem here is one that unfortunately _is_ solvable in a one-line regex, but not supported by several widely used browsers. We need to use a positive look-behind which isn't supported in Firefox, Safari, or IE11 as of the time of writing. Nevertheless here is the solution which will work in any environment that does support it, courtesy of a colleague of mine:

```javascript
n.replace(/(?<=\..*)\.|(?!^)-|[^\d\.-]/g, ""); // output "-12.34567"
```

Here we use a positive lookbehind `(?<= )` to tell our matcher to succeed only if it finds at least one dot `\..*` behind it. We combine it with the or operator `|` to the rest of our filters and get the final result.

Unfortunately this won't work in several major browsers, so for now I have a short function to handle it:

```javascript
const formatNumber = (n: string) => {
  // replace all non numeric, dots or dashes that aren't the first char
  const filtered = n.replace(/(?!^)-|[^\d.-]/g, "");

  // remove all but the first dot
  const [first, ...others] = filtered.split(".");
  const newValue = others.length
    ? [first, others.join("")].join(".")
    : filtered;

  return newValue;
};
```

## Final validation

The above function is perfect for validating a changing user input, but when it comes to validating the final value and converting it to a float, we need to do a small final check.

Running this filter over any string results almost always in a value that can be parsed correctly with `parseFloat`. The exceptions are resulting strings containing only `-`, `.` or `-.` which we can simply filter out and replace with zero. Or do a simple `NaN` check:

```javascript
const getNumeric = (str: string) => {
  const n = parseFloat(filterNumericInput(str));
  return isNaN(n) ? 0 : n;
};
```
