## JavaScript Style Guide

Table of Contents:

* [Syntax](#syntax)
  * [Naming](#naming)
  * [Naming private methods and properties](#naming-private-methods-and-properties)
  * [File names](#file-names)
  * [Indentation](#indentation)
  * [Braces](#braces)
  * [Ternaries](#ternaries)
  * [Spaces](#spaces)
  * [Line length](#line-length)
  * [Imports](#imports)
* [Comments and documentation](#comments-and-documentation)
  * [Inline Comments](#inline-comments)
* [Core language rules](#core-language-rules)
  * [Equality](#equality)
  * [Array and Object literals](#array-and-object-literals)
  * [Use a new var statement for each declaration](#use-a-new-var-statement-for-each-declaration)
  * [Avoid href="#" for JavaScript triggers](#avoid-href-for-javascript-triggers)
  * [Use modules, not global variables](#use-modules-not-global-variables)
* [ES6/7 rules](#es6-7-rules)
  * [Use =&gt; instead of bind(this)](#use-instead-of-bind-this-)
  * [Use backticks for string interpolation](#use-backticks-for-string-interpolation)
  * [Use ES6 classes for React classes](#use-es6-classes-for-react-classes)
  * [Do not use async/await or generators](#do-not-use-async-await-or-generators)
  * [Do not use Set or Map](#do-not-use-set-or-map-)
  * [Use let and const for new files; do not use var](#use-let-and-const-for-new-files-do-not-use-var)
* [Library rules](#library-rules)
  * [Use $ for jQuery](#use-for-jquery)
  * [Use `Promise` instead of `$.when()` or `$.Deferred()`](#use-promise-instead-of-when-or-deferred-)

### Syntax

#### Naming

```js
ClassNamesLikeThis
methodNamesLikeThis
variableNamesLikeThis
parameterNamesLikeThis
propertyNamesLikeThis
SYMBOLIC_CONSTANTS_LIKE_THIS
```

When naming variables and properties referring to jQuery element
objects, prefix the name with `$`:

```js
function doSomethingFancy(selector) {
    let $elements = $(selector);
    ...
}
```

#### Naming private methods and properties

Private methods and properties (in files, classes, and namespaces)
should be named with a leading underscore.

While we do not currently use any compilers to enforce this, clients
of an API or class are expected to respect these conventions.

```js
function _PrivateClass() {
    // should not be instantiated outside of this file
}

function PublicClass(param) {
    this.publicMember = param;
    this._privateMember = new _PrivateClass();
}

var x = new _PrivateClass();  // OK - we’re in the same file.
var y = new PublicClass();    // OK
var z = y._privateMember;     // NOT OK!
```

Rationale: leading underscores for private methods and properties is
consistent with the styles used in numerous JavaScript libraries, many
of which we include in our code base (e.g. Backbone). It is also
consistent with our Python style guide, lowering the mental effort for
developers to switch between the two.

#### File names

```
file-names-like-this.js
template-names-like-this.handlebars
```

#### Indentation

Use 4-space indenting for all code. **Do not use tabs**.

Extra indentation should be used to clearly distinguish multiline
conditionals from the following block of code (similar to the PEP8
rule for Python code).

Yes:
```js
if (someReallyLongBooleanVariableIMeanReallyLong &&
        someOtherBoolean) {
    return "monkeys";
}
```

No:
```js
if (someReallyLongBooleanVariableIMeanReallyLong &&
    someOtherBoolean) {
    return "monkeys";
}
```

#### Braces

Braces should always be used on blocks.

`if/else/for/while/try` should always have braces and always go on
multiple lines, with the opening brace on the same line.

Yes:
```js
if (true) {
    blah();
}
```

`else/else if/catch` should go on the same line as the brace:

```js
if (blah) {
    baz();
} else {
    baz2();
}
```

No:
```js
if (true)
    blah();
```

#### Ternaries

Ideally, ternaries are written on a single line:

```js
const color = selected ? 'green' : 'orange'
```

If the ternary is too long to fit on a single line, within the
79-character limit, each fork of the ternary should be on its own
line.

Yes:
```js
const result = reallyVeryLengthConditional
    ? superLongComputationOfPositiveResult()
    : superLongComputationOfNegativeResult();

const style = selected
    ? {
        color: 'green',
        fontWeight: 'bold',
    }
    : {
        color: 'orange',
    }
```

No:
```js
// Unnecessarily split:
const color = selected
    ? 'green'
    : 'orange';

// Too long
const result = reallyVeryLengthConditional ? superLongComputationOfPositiveResult() : superLongComputationOfNegativeResult();

// Incorrectly split
const result = reallyVeryLengthConditional ?
    superLongComputationOfPositiveResult() :
    superLongComputationOfNegativeResult();
```

#### Spaces

Don't insert extra spaces between parens, brackets, or braces.

Yes:
```js
// Literals:
const fancyPants = pants.map((pant) => ({...pant, isFancy: true}));
const toCartesian = (r, theta) => [r * cos(theta), r * sin(theta)];

// Destructuring:
const {StyleSheet, css} = require('aphrodite');
const [x, y] = coordinates;


// Template strings:
const mission = `A ${price}, ${quality} education for ${clientele}.`;

// Parens:
if ((a === b) || (b === c)) {...}
```

No:
```js
// Literals:
const fancyPants = pants.map((pant) => ({ ...pant, isFancy: true }));
const toCartesian = (r, theta) => [ r * cos(theta), r * sin(theta) ];

// Destructuring:
const { StyleSheet, css } = require('aphrodite');
const [ x, y ] = coordinates;

// Template strings:
const mission = `A ${ price }, ${ quality } education for ${ clientele }.`;

// Parens:
if ( ( a === b ) || ( b === c ) ) {...}
```

#### Line length

Lines should not exceed 79 characters.  (This is called the "80
character rule," leaving 1 character for the newline.)

This is consistent with our Python style guide, which adheres to PEP8.

#### Imports

**Module System**
Prefer ES2015 imports (`import foo from 'foo'`) to CommonJS requires
(`const foo = require('foo')`). [Learn more about ES2015 imports](https://docs.google.com/document/d/12kT37eK7VusH8OK4vU9b7AmXN2G0Sw8g0c1LZ83-l-c/edit#heading=h.2j42ozjzl6id).

*NOTE*: Khan Academy employees working on the webapp need to be aware of an exception to this rule. The `i18n` module should still be required using CommonJS:

```js
const i18n = require("../shared-package/i18n.js");
```

The reasoning for this is that our build process that updates translations
looks for very specific markup, and ES2015 modules get transpiled by Babel
to an incompatible syntax.

**Grouping**
There should be 3 clusters of imports: third-party (aka vendor) libraries,
first-party libraries, and Flow types.

This approximately mirrors our [Python import style](python.md#import-style),
though there are no "system" imports in JavaScript.

"First party" code is anything we wrote whose primary source lives in
the repository its being used in.  Underscore is third party because
we didn't write it.  KaTeX is third party in webapp because even
though we wrote it, its primary sources lives in a different
repository.

**Named Imports**
Named imports should go on the same line, when possible. When 3+ named
imports are imported, break each named import onto its own line.

Yes:
```js
import $ from "jquery";
import Kicksend from "../../third_party/javascript-khansrc/mailcheck/mailcheck.js";
import React, {Component} from "react";
import _ from "underscore";

import APIActionResults from "../shared-package/api-action-results.js";
import Cookies from "../shared-package/cookies.js";
import DashboardActions from './datastores/dashboard-actions.js';
import HappySurvey from "../missions-package/happy-survey.jsx";
import UserMission from "../missions-package/user-mission.js";
import cookieStoreRenderer from "../shared-package/cookie-store.handlebars";
import mainThing, {
    firstOtherThing,
    secondOtherThing,
    thirdOtherThing,
} from '../somewhere';

import type {Thing} from '../somewhere-else';
```

No:
```js
// Avoid require()
var _ = require("underscore");

// Avoid grouping first- and third-party libraries
import React from 'react';
import APIActionResults from "../shared-package/api-action-results.js";

// Avoid breaking named imports onto multiple lines when possible.
import React, {
    Component
} from 'react';

```

------------------------------
### Comments and documentation

#### Inline Comments

Inline style comments should be of the `//` variety, not the `/* */`
variety.

-----------------------
### Core language rules

#### Equality

Prefer `===` (strict equality) to `==` due to the [numerous oddities
related to JavaScript's type coercion](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/).

The only valid use of `==` is for comparing against null and undefined
at the same time:

```js
// Check null and undefined, but distinguish between other falsey values
if (someVariable == null) {
```

Though you will often want to just check against falsey values, and
can just say `if (!someVariable) {...}`.

#### Array and Object literals

Always use `[]` and `{}` style literals to initialize arrays and
objects, not the `Array` and `Object` constructors.

Array constructors are error-prone due to their arguments: `new
Array(3)` yields `[undefined, undefined, undefined]`, not `[3]`.

To avoid these kinds of weird cases, always use the more readable
array literal.

Object constructors don't have the same problems, but follow the same
rule for consistency with arrays.  Plus, `{}` is more readable.

#### Use a new var statement for each declaration

Yes:
```js
var a = "foo";
var b = a + "bar";
var c = fn(a, b);
```

No:
```js
var a = "foo",
    b = a + "bar",
    c = fn(a, b);
```

A single var statement is bad because:

* If you forget a comma, you just made a global
* It originated when people wanted to save bytes, but we have a minifier
* It makes line-based diffs/editing messier
* It encourages C89-style declarations at the top of scope, preventing
  you from only declaring vars before first use, the latter preferable
  as it conveys intended scope to the reader

#### Avoid `href="#"` for JavaScript triggers

When you want a link-like thing rather than a button to trigger a
JavaScript operation, rather than going to a new address.

Here's a discussion on Stack Overflow about options:
http://stackoverflow.com/questions/134845/href-tag-for-javascript-links-or-javascriptvoid0


Yes:
```js
<a href="javascript:void 0">Flag</a>
```

No:
```js
<a href="#">Flag</a>
```

#### Use modules, not global variables

In most of our major JavaScript repositories (webapp, perseus,
khan-exercises), we use some form of module system like
[RequireJS](http://requirejs.org/) or
[browserify](http://browserify.org/), or in the case of webapp our own
home built thing that works similarly to browserify.

In all of these cases, there are mechanisms for an explicit
import/export mechanism rather than using global variables to export
functionality.

Yes:
```js
var Jungle = {
    welcome: function() {
        // ...
    },
    haveFever: function() {
        // ...
    }
};

module.exports = Jungle;
```

No:
```js
window.Jungle = {
    welcome: function() {
        // ...
    },
    haveFever: function() {
        // ...
    }
};
```

**NO**:
```js
window.welcome = function() {
   // ...
};

window.haveFever = function() {
   // ...
};
```

You can export multiple objects in one file, but consider if it
wouldn't be better to split up the file to maintain one export per file.

---------------
### ES6/7 rules

Several of our supported browsers support only ES5 natively.  We use
polyfills to emulate [some -- but not all -- ES6 and ES7 language
features](https://docs.google.com/spreadsheets/d/12mF99oCpERzLKS07wPPV3GiISUa8bPkKveuHsESDYHU/edit#gid=0)
so they run on ES5-capable browsers.

In some cases, we do not yet allow a new language feature, if it's
expensive to polyfill.  In others, we require using the newer language
feature and avoiding the old:

| Construct | Use...                                | ...instead of |
| --------- | ------------------------------------- | ---------------------- |
| backticks | `` `http://${host}/${path}` `` | `"http://" + host + "/" + path` |
| destructuring | `var {x, y} = a;` | `var x = a.x; var y = a.y;` |
| fat arrow | `foo(() => {...})` | `foo(function() {...}.bind(this))` |
| let/const | `let a = 1; const b = "4EVAH"; a++;` | `var a = 1; var b = "4EVAH"; a++;` |
| includes | `array.includes(item)` | `array.indexOf(item) !== -1` |
| for/of | `for (const [key, value] of Object.entries(obj)) {...}` | `_.each(obj, function(value, key) {...})` |
| spread | `{...a, ...b, c: d}` | `_.extend({}, a, b, {c: d})` |
| rest params | `function(bar, ...args) {foo(...args);}` | `function(bar) {var args = Array.prototype.slice.call(arguments, 1); foo.apply(null, args);}` |

#### Use `=>` instead of `bind(this)`

Arrow functions are easier to read (and with Babel, more efficient)
than calling `bind` manually.

#### Use rest params instead of `arguments`

The magic `arguments` variable has some odd quirks. It's simpler to
use rest params like `(...args) => foo(args)`.

#### Use backticks for string interpolation

`+` is not forbidden, but backticks are encouraged!

#### Use ES6 classes for React classes

See [React Use ES6 classes](react.md#use-es6-classes) for details.

For classes outside of React -- which should actually be pretty rare -- you
should also use ES6 classes.  Some things to keep in mind when using ES6
classes:

- Use `static` properties instead of adding propertiers to the class object
  after defining the class.
- Use `extend` syntax for inheritance.


#### Do not use `async`/`await` or generators

This is because the polyfill for these constructs generates very large
code.

This rule may change once all our supported browsers support ES6
natively.

#### Do not use `Set` or `Map`

The polyfills for these, though not huge, are large enough it's not
worth the (small) benefit of using these classes for hashtables
instead of just using `object`.

This rule may change if strong enough support for these types is
evinced.

#### Use `let` and `const` for new files; do not use `var`

`let` is superior to `var`, so prefer it for new code.

-----------------

### Library rules

#### Use `$` for jQuery

We use `$` as the jQuery identifier, as opposed to typing out `jQuery`
in full.

Yes:
```js
$(".some-class span").hide();
```

No:
```js
jQuery(".some-class span").hide();
```

### Use `Promise` instead of `$.when()` or `$.Deferred()`

We use the [ES6 Promise polyfill](https://github.com/jakearchibald/es6-promise) on our site. In general the [MDN Polyfill Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is extremely helpful in determining how to best use the `Promise` object.

Moving from `$.when()` to the `Promise` object is quite easy.

Instead of... | Use...
--------------|-------------------
`$.when()` (no arguments) | `Promise.resolve()`
`$.when.apply($, arrayOfPromises)` | `Promise.all(arrayOfPromises)`
`$.when(promise)` | `promise` (`$.when` just returns the promise)

Note that if you're calling `Promise.all()` on an array of promises that the result to be passed to the `.then()` callback will be an array of all the results from each of the promises in the array. More [details on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

Moving from `$.Deferred` to `Promise` can be a bit trickier, it all depends upon how you were originally using it. The biggest difference is that in order to mark a `Promise` as resolved you must execute the callback function that was passed in to the `new Promise()` constructor. This is easy if you're tracking progress on some asynchronous operation:

```
var promise = new Promise((resolve) => {
    $.ajax(...).then(resolve);
});
```

However it gets a bit trickier when you want to resolve the promise at some later time, outside the scope of the instantiation function. Since there is no `.resolve()` method, as was available on `$.Deferred()` objects, a common pattern may look like this:

```
var markResolved;
var promise = new Promise((resolve) => {
    markResolved = resolve;
});

// later in your code...
if (markResolved) {
    markResolved();
}
```

It's also important to note that Promises do not throw exceptions. If you wish to catch an exception you must explicitly attach a `.catch()` callback to it and listen for the error.

##### `$.get()`

Get some textual data:

```
khanFetch("/some.json")
    .then((response) => response.text())
    .then((text) => {/* Use the textual data... */})
    .catch((err) => {/* Handle server error... */});
```

Get some JSON data (same use case as `$.getJSON`).

```
khanFetch("/some.json")
    .then((response) => response.json())
    .then((json) => {/* Use the JSON data... */})
    .catch((err) => {/* Handle server error... */});
```

##### `$.post()`

POSTing JSON to an API endpoint and getting JSON back.

```
khanFetch("/api/some/endpoint", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(myJSONObject),
})
    .then((response) => response.json())
    .then((json) => {/* Use the JSON data... */})
    .catch((err) => {/* Handle server error... */});
```

POSTing form data to an API andpoint and getting JSON back. This is the default encoding that `$.post` used, so this should be used in place of `$.post(url, data)`. To make this use case easier, we wrote a function called `formUrlencode` which automatically encodes the form data and appends the `"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"` header.
```
const {khanFetch, formUrlencode} = require("./path-to-shared-package/khan-fetch.js");

khanFetch("/api/some/endpoint", {
    method: "POST",
    ...formUrlencode({
        key1: "value1",
        key2: 2,
    }),
})
    .then((response) => response.json())
    .then((json) => {/* Use the JSON data... */})
    .catch((err) => {/* Handle server error... */});
```

---

> This documentation is constantly being updated. Be sure to refer back to here for changes.
