# Ember Mixinify Class [![Build Status](https://travis-ci.org/alexlafroscia/ember-mixinify-class.svg)](https://travis-ci.org/alexlafroscia/ember-mixinify-class)

An easy way to create an Ember class from a ES6 one, through the use of [Ember.Mixin](http://emberjs.com/api/classes/Ember.Mixin.html)

## Usage

### Basic

```javascript
import Ember from 'ember';
import mixinify from 'ember-mixinify-class';

class MyBabelClass {
  get foo() {
    return 'Properties are accessible...';
  }
  bar() {
    return '...and functions are ported over.';
  }
}

const EmberClass = Ember.Object.extend(mixinify(MyBabelClass));

const obj = EmberClass.create();
obj.get('foo'); // -> 'Properties are accessible...'
obj.bar();      // -> '...and functions are ported over.'
```

### Extending and Overwriting the Class

```javascript
// Assuming class and imports above are available

const ExtendedEmberClass = Ember.Object.extend(mixinify(MyBabelClass), {
  foo: 'Properties can be overwritten...',
  bar() {
    return '...as can functions...';
  },
  buzz() {
    return '...and you can easily extend the default behavior';
  }
});

const obj = ExtendedEmberClass.create();
obj.get('foo'); // -> 'Properties can be overwritten...'
obj.bar();      // -> '...as can functions...'
obj.buzz();     // -> '..and you can easily extend the default behavior'
```

These examples and more can be found in the tests included in this repository.

## Limitations

Currently, there's no way to access the constructor for an ES6 class and call it like a function.  Because of this, it's not really possible to apply the constructor of the ES6 class to the Ember class being created.  I'll be looking into whether there's any way to get around that, but for now, **the constructor for the ES6 class is not called**.

## Compatibility

This addon doesn't work on IE versions lower than 9 due to use of [`Object.getOwnPropertyNames`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) API.

## Installation

### As an addon

```bash
ember install ember-mixinify-class
```

### For development

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
