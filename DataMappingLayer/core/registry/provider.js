/**
 * Updated 03.11.2019
 * Such abstraction is implementation of adapter pattern
 * Ideally there should be one 'provider-adapter' per approach of creating entity
 *
 * Good practice use providers as abstraction upon resource
 * It allow to use different goods as factories with enclosed arguments and others
 *
 * @param factory
 * @param value
 * @param sourceClass
 * @return {{getService(): (*|undefined)}}
 */

const provider = ({ factory, value, sourceClass }) => ({
  getService() {
    if (factory) {
      return factory.create();
    }
    if (value) {
      return value;
    }
    if (sourceClass) {
      return new sourceClass();
    }
  }
});

/**
 * Examples of how it could be with different providers by the use of adapter pattern
 *
 * PS: more readable and easy to understand
 */

const _createProvider = (implementation) => ({
  getService: (...args) => implementation(...args)
});

const factoryProvider = (factory) => _createProvider(
  () => factory.create()
);

const valueProvider = (value) => _createProvider(
  () => value
);

const classProvider = (sourceClass) => _createProvider(
  () => new sourceClass()
);

exports = provider;
exports.factoryProvider = factoryProvider;
exports.valueProvider = valueProvider;
exports.classProvider = classProvider;
