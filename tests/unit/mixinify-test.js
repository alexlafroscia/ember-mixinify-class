import Ember from 'ember';
import mixinify from 'ember-mixinify-class';
import { module, test } from 'qunit';

class MyBabelClass {
  get someProperty() {
    return 'a';
  }
  someFunction() {
    return 'b';
  }
}

module('Unit | mixinify babel class');

test('it adds the properties of a Babel class to an Ember one', function(assert) {
  const EmberClass = Ember.Object.extend(mixinify(MyBabelClass));
  const obj = EmberClass.create();
  assert.equal('a', obj.get('someProperty'));
  assert.equal('b', obj.someFunction());
});

test('the ES6 properties can be overwritten', function(assert) {
  const ExtendedEmberClass = Ember.Object.extend(mixinify(MyBabelClass), {
    foo: 'c',
    bar() {
      return 'd';
    },
    buzz() {
      return 'e';
    }
  });
  const obj = ExtendedEmberClass.create();
  assert.equal('c', obj.get('foo'), 'Overwrote propety correctly');
  assert.equal('d', obj.bar(), 'Overwrote function correctly');
  assert.equal('e', obj.buzz(), 'Added new function correctly');
});
